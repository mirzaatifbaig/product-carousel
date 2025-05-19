import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products, title = "Featured Products" }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const totalPages = Math.ceil(products.length / visibleItems);

  const productGroups = Array.from({ length: totalPages }).map((_, pageIndex) =>
    products.slice(pageIndex * visibleItems, (pageIndex + 1) * visibleItems),
  );

  const goToSlide = (index) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          className="relative"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {productGroups.map((group, pageIndex) => (
              <CarouselItem key={pageIndex} className="p-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.map((product) => (
                    <div key={product.id} className="w-full">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
        </Carousel>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => goToSlide(index)}
              className={`p-4 text-white hover:text-white w-fit h-fit min-w-0 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-indigo-600 hover:bg-indigo-700"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
