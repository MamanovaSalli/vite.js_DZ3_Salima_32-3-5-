import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const minPriceParam = searchParams.get('price');
    if (minPriceParam) {
      setMinPriceFilter(minPriceParam);
    }
  }, [searchParams]);

  const handleFilterChange = (e) => {
    setMinPriceFilter(e.target.value);
  };

  const applyFilter = () => {
    setSearchParams({ price: minPriceFilter });
  };

  const filteredProducts = minPriceFilter
    ? products.filter(product => product.price >= parseFloat(minPriceFilter))
    : products;

  return (
    <div>
      <h2>Products</h2>
      <input
        type="number"
        placeholder="Min Price"
        value={minPriceFilter}
        onChange={handleFilterChange}
      />
      <button onClick={applyFilter}>Apply Filter</button>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;