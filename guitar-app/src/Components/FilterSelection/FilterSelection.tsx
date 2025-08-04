import { useCallback, useMemo, useState } from "react";
import type { Product } from "../../model/product.model";
import "./FilterSelection.css";
import GuitarCard from "../GuitarCard/GuitarCard";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import type { Brand } from "../../model/brand.model";
import Pagination from "../Pagination/Pagination";
import Dropdown from "../Dropdown/Dropdown";

interface FilterSectionProps {
  categories: string[];
  brand: Brand;
  products: Product[];
  itemsPerPage?: number;
}

export default function FilterSection({
  categories,
  products,
  itemsPerPage = 3,
  brand,
}: FilterSectionProps) {
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedType) {
      result = result.filter(
        (product) => product.type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    if (query) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return result;
  }, [products, selectedType, query]);

  //   Search
  const onSearch = useCallback(
    (value: string) => {
      setSearchParams((prevParams) => {
        if (value) {
          prevParams.set("q", value);
        } else {
          prevParams.delete("q");
        }
        return prevParams;
      });
      setCurrentPage(1);
    },
    [setSearchParams]
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <div className="filters">
        <section className="FilterSection">
          <Dropdown
            options={categories}
            selected={selectedType}
            setSelected={setSelectedType}
            setCurrentPage={setCurrentPage}
          />
        </section>
        <section className="searchBar">
          <SearchBar
            placeholder="Search by name"
            onSearch={onSearch}
            defaultValue={query}
          />
        </section>
      </div>

      <div className="productList">
        {currentProducts.length > 0
          ? currentProducts.map((product: Product) => (
              <GuitarCard key={product.id} product={product} brand={brand} />
            ))
          : "No products found"}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
