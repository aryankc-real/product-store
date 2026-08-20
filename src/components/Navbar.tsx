import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">Product Store</Link>
        <Link to="/cart">
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
