import { useCart } from "@/context/useCart";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type CartProduct = {
  id: number | string;
  image: string;
  title: string;
  price: number;
  category?: string;
};

type CartItem = {
  product: CartProduct;
  quantity: number;
};

type UseCartResult = {
  items: CartItem[];
  updateQuantity: (id: number | string, quantity: number) => void;
  removeFromCart: (id: number | string) => void;
  clearCart: () => void;
  totalPrice: number;
};

function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart() as UseCartResult;
  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto mt-12 p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm dark:shadow-xl transition-colors duration-250">
        <p className="text-lg font-semibold mb-6 text-zinc-700 dark:text-zinc-300">No Items in Cart</p>
        <Link to={"/"} className="inline-block px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium rounded-lg shadow-sm transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-850 dark:text-zinc-100 mb-6">Your Cart</h1>
      <div className="space-y-4">
        {items.map(({ product, quantity }: CartItem) => (
          <div key={product.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl gap-4 shadow-sm dark:shadow-md transition-colors duration-250">
            <div className="flex items-center gap-4 w-full sm:flex-1 min-w-0">
              <img src={product.image} alt={product.title} className="w-20 h-20 object-contain bg-white p-2 rounded-lg border border-zinc-100 dark:border-zinc-800 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-sm md:max-w-md">{product.title}</p>
                <p className="text-zinc-400 dark:text-zinc-500 text-xs font-medium uppercase mt-0.5">{product.category}</p>
                <p className="text-zinc-900 dark:text-zinc-100 text-sm font-semibold mt-1">${product.price.toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(product.id)}
                  className="text-rose-500 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-350 font-medium text-xs transition-colors cursor-pointer mt-1.5 inline-flex items-center gap-1 hover:underline select-none"
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 justify-between sm:justify-end w-full sm:w-auto shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-950">
                <button 
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-3 py-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-150 dark:hover:bg-zinc-800/50 rounded-l-lg font-bold transition-colors cursor-pointer"
                >
                  -
                </button>
                <p className="px-3 py-1.5 font-semibold text-zinc-800 dark:text-zinc-200 text-sm">{quantity}</p>
                <button 
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-3 py-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-150 dark:hover:bg-zinc-800/50 rounded-r-lg font-bold transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
              <p className="font-bold text-zinc-900 dark:text-zinc-100 w-24 text-right">${(product.price * quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6 gap-4">
        <Button 
          variant="outline" 
          onClick={clearCart} 
          className="w-full sm:w-auto border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-rose-600 dark:text-rose-500 hover:text-rose-700 dark:hover:text-rose-450 transition-colors cursor-pointer"
        >
          Clear Cart
        </Button>
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-zinc-500 dark:text-zinc-455 font-medium text-sm">Total:</span>
          <span className="text-2xl font-black text-zinc-950 dark:text-zinc-100">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
