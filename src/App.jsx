import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import ProductGrid from "@/components/ProductGrid";
import { products } from "./data/products";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4 space-y-12">
        <section className="bg-indigo-600 rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between text-white">
            <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Summer Collection 2025
              </h2>
              <p className="text-indigo-100 md:text-lg mb-6">
                Discover our new arrivals with up to 40% off. Limited time
                offer.
              </p>
              <Button
                variant="secondary"
                className="text-indigo-600 font-medium"
              >
                Shop Now
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
                alt="Featured product"
                className="h-64 w-64 object-contain transform rotate-12"
              />
            </div>
          </div>
        </section>

        <section>
          <ProductCarousel products={products} title="Best Sellers" />
        </section>

        <section>
          <ProductGrid products={products} />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © 2025 ShopSmart. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
