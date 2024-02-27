import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const response = await axios.get("https://dummyjson.com/products");
                setProducts(response.data.products);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Our products</h2>
            {
                products.map(product => ( // Заменено на product
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <li>{product.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export { Product };
