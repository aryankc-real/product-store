import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-100 font-sans transition-colors duration-250 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Navbar />
      <main className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div className="text-center py-20 text-lg text-zinc-500 dark:text-zinc-400">Page not found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
