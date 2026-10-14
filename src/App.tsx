import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
      <>
          <Header />

          {products.map((product) => (
              <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              />
          ))}

        <h1 className="text-4xl font-bold text-amber-600">
          Honey Store 🍯
        </h1>
      </>
  );
}

export default App;
