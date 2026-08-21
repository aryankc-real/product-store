import { useProduct } from "@/context/useProduct";

import { Search } from "lucide-react";

function FilterBar() {
  const {
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
  } = useProduct();
  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm dark:shadow-lg dark:shadow-black/10 transition-colors duration-250">
      <div className="flex-1 relative">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search products by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-zinc-900 dark:focus:border-zinc-100 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 transition-all"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pl-1">Category</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-zinc-900 dark:focus:border-zinc-100 cursor-pointer min-w-[160px] transition-all"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pl-1">Sort By</span>
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "none" | "price-asc" | "price-desc")
            }
            className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-zinc-900 dark:focus:border-zinc-100 cursor-pointer min-w-[160px] transition-all"
          >
            <option value="none">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
