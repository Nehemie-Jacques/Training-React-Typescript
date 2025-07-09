import React from "react";
import { useState, useEffect } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const MyComponent = () => {
    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/1");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fecthData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>ID: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>description: {data.description}</p>
                    <p>price: {data.price}</p>
                    <p>discountPercentage: {data.discountPercentage}</p>
                    <p>rating: {data.rating}</p>
                    <p>stock: {data.stock}</p>
                    <p>brand: {data.brand}</p>
                    <p>category: {data.category}</p>
                    <p>thumbnail: {data.thumbnail}</p>
                    {data.image.map(img) => (
                    <img src="{img}" alt="#" />
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default MyComponent;