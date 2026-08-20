import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <span>{product.category}</span>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <Button>Add to Cart</Button>
      </Link>
    </div>
  );
}

export default ProductCard;
