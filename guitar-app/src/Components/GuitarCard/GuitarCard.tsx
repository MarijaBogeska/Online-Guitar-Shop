import { useNavigate } from "react-router-dom";
import type { Product } from "../../model/product.model";
import "./GuitarCard.css";
import type { Brand } from "../../model/brand.model";

interface GuitarBrandsProps {
  product: Product;
  brand: Brand;
}

export default function GuitarCard({ product, brand }: GuitarBrandsProps) {
  const navigate = useNavigate();
    return (
    <div className="GuitarCard" onClick={()=>{navigate(`/models/${brand.id}/details?model=${product.id}`)}}>
      <section className="product">
        <img src={product.image} alt={product.name} />
      </section>
      <section className="productDetails">
        <div>{product.name}</div>
        <div>${product.price}</div>
      </section>
    </div>
  );
}
