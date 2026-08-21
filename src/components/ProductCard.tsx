import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import type { Product } from "@/types/product";
import { useCart } from "@/context/useCart";

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex flex-col justify-between hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
      <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="h-48 flex items-center justify-center mb-4 bg-white rounded-lg p-4 transition-transform duration-200 group-hover:scale-98">
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>
        <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mt-1 select-none">
          {product.category}
        </span>
        <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200 line-clamp-2 mt-2 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors flex-1">
          {product.title}
        </h3>
        <p className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </Link>
      <Button 
        className="mt-4 w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium border border-transparent shadow-xs transition-colors cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
