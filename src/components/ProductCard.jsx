import React, {useState} from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Loading from "@/components/Loading"; // make sure this exists

const ProductCard = ({ product }) => {
  const { name, price, image, description, rating, category } = product;
  const [imageLoaded, setImageLoaded] = useState(false);

  const toTitleCase =  (str)  => {
        return str?.replace(/\w\S*/g, (txt) =>
            txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
        );
    }
  return (
    <Card className="h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden h-64 flex items-center justify-center bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-white">
            <Loading />
          </div>
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <Badge className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-gray-800">
          {toTitleCase(category)}
        </Badge>
      </div>

      <CardHeader className="p-5 pb-0">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-1">
            <Star size={16} fill="#FBBF24" strokeWidth={0} />
          </div>
          <span className="text-gray-700 text-sm">{rating}</span>
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      </CardHeader>

      <CardContent className="p-5 pt-2">
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-between mt-auto">
        <span className="font-bold text-lg">${price.toFixed(2)}</span>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
