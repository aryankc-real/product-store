import Filterbar from "@/components/Filterbar";
import ProductCard from "@/components/ProductCard";
import { useProduct } from "@/context/useProduct";

function Home() {
  const { loading, error, filteredProduct } = useProduct();
  if (loading) return <p>Loading Products...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <Filterbar />
      {filteredProduct.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div>
          {filteredProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
