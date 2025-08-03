import { useNavigate } from "react-router-dom";
import type { Brand } from "../../model/brand.model";
import "./BrandSection.css";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

interface BrandSectionProps {
  brands: Brand[];
}

export default function BrandSection({ brands }: BrandSectionProps) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(brands.length / 8);

  const startIndex = (currentPage - 1) * 8;
  const currentBrands = brands.slice(startIndex, startIndex + 8);
  return (
    <div>
      <section className="BrandIcons">
        {currentBrands.slice(0, 8).map((brand: any) => (
          <img
            key={brand.id}
            src={brand.image}
            alt={brand.name}
            onClick={() => {
              navigate(`/models/${brand.id}`);
            }}
            
          />
        ))}
      </section>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages}/>
      )}
    </div>
  );
}

