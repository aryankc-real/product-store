import FilterBar from "../components/FilterBar";
import ProductCard from "@/components/ProductCard";
import { useProduct } from "@/context/useProduct";

function Home() {
  const { loading, error, filteredProduct } = useProduct();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-28 gap-4">
        <div className="w-10 h-10 border-4 border-zinc-900 dark:border-zinc-100 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium animate-pulse">Loading Products...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-md mx-auto text-center py-20 px-4">
        <p className="text-rose-600 dark:text-rose-500 text-lg font-semibold mb-2">Failed to Load Products</p>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{error}</p>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-6">
      <FilterBar />
      {filteredProduct.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <p className="text-zinc-800 dark:text-zinc-300 text-lg font-medium">No products match your search.</p>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Try modifying your keywords or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
