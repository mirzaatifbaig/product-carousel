import React from 'react';
import { Star } from 'lucide-react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductCard = ({ product }) => {
    const { name, price, image, description, rating, category } = product;

    return (
        <Card className="h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative overflow-hidden h-64">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-gray-800">
                    {category}
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