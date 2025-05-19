import ProductCarousel from './components/ProductCarousel';
import { products } from './data/products';
import {ShoppingBag} from "lucide-react";
function App() {
    return (
        <div className="min-h-screen bg-gray-50">

            <main className="max-w-7xl mx-auto py-8 px-4">
                <section className="mb-12">
                    <div className="bg-indigo-600 rounded-xl overflow-hidden shadow-lg">
                        <div className="px-6 py-12 md:py-16 md:px-12 text-center md:text-left md:flex md:items-center">
                            <div className="md:w-2/3 mb-8 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                    Summer Collection 2025
                                </h2>
                                <p className="text-indigo-100 md:text-lg mb-6">
                                    Discover our new arrivals with up to 40% off. Limited time offer.
                                </p>
                                <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-md transition-colors">
                                    Shop Now
                                </button>
                            </div>
                            <div className="md:w-1/3 flex justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
                                    alt="Featured product"
                                    className="h-64 w-64 object-contain transform rotate-12"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <ProductCarousel products={products} title="Best Sellers" />
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center">© 2025 ShopSmart. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
