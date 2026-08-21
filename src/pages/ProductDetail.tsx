import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "@/api/product";
import { useCart } from "@/context/useCart";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id!);
        if (!cancelled) {
          setProduct(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load product",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-28 gap-4">
        <div className="w-10 h-10 border-4 border-zinc-900 dark:border-zinc-100 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium animate-pulse">
          Loading Product details...
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-md mx-auto text-center py-20 px-4">
        <p className="text-rose-600 dark:text-rose-500 text-lg font-semibold mb-2">
          Failed to Load Product
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{error}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 text-zinc-900 dark:text-zinc-100 hover:underline font-semibold text-sm"
        >
          <ArrowLeft />
          <span>Back to Products</span>
        </Link>
      </div>
    );
  }
  if (!product)
    return (
      <div className="text-center py-20 text-lg text-zinc-400">
        Product not found
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="group text-zinc-550 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold mb-6 inline-flex items-center gap-2 transition-colors text-sm"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform duration-200"
        />
        <span>Back to Products</span>
      </Link>
      <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-xl transition-colors duration-250">
        <div className="flex justify-center items-center p-6 bg-white rounded-lg min-h-[320px] border border-zinc-100 dark:border-zinc-800/40">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-80 object-contain hover:scale-102 transition-transform duration-200"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mt-1">
              {product.category}
            </span>
            <h1 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-4 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center mt-3">
              <span className="text-yellow-500 text-lg mr-1">&#9733;</span>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {product.rating?.rate}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-2">
                ({product.rating?.count} reviews)
              </span>
            </div>
            <p className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-5">
              ${product.price.toFixed(2)}
            </p>
            <div className="border-t border-zinc-200 dark:border-zinc-800 my-5"></div>
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-300 text-xs tracking-wider uppercase">
              Description
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="mt-8">
            <Button
              className="w-full md:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium border border-transparent shadow-sm transition-colors cursor-pointer text-sm rounded-lg"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
