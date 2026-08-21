import { useCart } from "@/context/useCart";
import { Link } from "react-router-dom";
import { ShoppingBag, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/useTheme";

function Navbar() {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
          Product Store
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <Link to="/cart" className="relative text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm font-medium transition-colors flex items-center gap-1.5">
            <ShoppingBag size={18} />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-[10px] font-bold text-white dark:text-zinc-900 ring-2 ring-white dark:ring-zinc-950">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
