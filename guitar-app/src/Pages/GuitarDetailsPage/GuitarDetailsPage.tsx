import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import "./GuitarDetailsPage.css";
import { useQuery } from "@apollo/client";
import brandQueries from "../../Graphql/Queries/brands";
import { Spinner } from "../../Components/Spinner/Spinner";
import { useState } from "react";
import type { Product } from "../../model/product.model";
import type { Musician } from "../../model/musicians.model";
import MusicianCard from "../../Components/MusicianCard/MusicianCard";
import Button from "../../Components/Button/Button";
import Pagination from "../../Components/Pagination/Pagination";
// import { useState } from "react";

export default function GuitarDetailsPage() {
  const navigate = useNavigate();
  const { id: brandId } = useParams();
  const [activeSection, setActiveSection] = useState<"specs" | "musicians">(
    "specs"
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const modelId = searchParams.get("model");

  if (!brandId || !modelId) return <p>Not found</p>;

  const { loading, error, data } = useQuery(brandQueries.GET_UNIQUE_MODEL, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
  });
  if (loading) return <Spinner />;
  if (error || !data?.findUniqueModel) return <p>Error loading model.</p>;
  //   console.log(data);

  const product: Product = data.findUniqueModel;
  const musicians: Musician[] = data.findUniqueModel.musicians;

  const itemsPerPage = 2;

  const totalPages = Math.ceil(musicians.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMusicians = musicians.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  function formatItems(key: string) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }

  return (
    <>
      <div className="btn">
        <Button
          onClick={() => {
            navigate(`/models/${brandId}`);
          }}
          text="Back To List"
          arrow="left"
        />
      </div>
      <div className="GuitarDetailsPage">
        <Heading
          logo="../../images/logo.png"
          beforeSpan={product.name}
          photo={product.image}
          imgStyle={{
            objectFit: "contain",
            transform: "rotate(-45deg)",
            width: "477px",
            height: "249px",
          }}
          divStyle={{ width: "672px", height: "459px", overflow: "visible" }}
        />
        <section>
          <div className="sections">
            <button
              onClick={() => setActiveSection("specs")}
              className={
                activeSection === "specs" ? "active-btn" : "inactive-btn"
              }
            >
              Specification
            </button>
            <button 
              onClick={() => setActiveSection("musicians")}
              className={
                activeSection === "musicians" ? "active-btn" : "inactive-btn"
              }
            >
              Who plays it?
            </button>
          </div>
          {activeSection === "specs" ? (
            <div>
              <p className="spec">{product.description}</p>
              <ul className="spec">
                {Object.entries(product.specs)
                  .filter(([key]) => key !== "__typename")
                  .map(([key, value]) => (
                    <li key={key}>
                      <span>{formatItems(key)}:</span> {String(value)}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div>
              <div className="musicianList">
                {currentMusicians.map((musician, i) => (
                  <MusicianCard key={i} musician={musician} />
                ))}
              </div>
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
