import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from 'react';


function App() {
    const [cartCount, setCartCount] = useState(0);
  return (
      <>
          <main className="max-w-7xl mx-auto px-6">
          <Header />
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                  <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  />
              ))}
            </div>
          </main>
      </>
  );
}

export default App;
