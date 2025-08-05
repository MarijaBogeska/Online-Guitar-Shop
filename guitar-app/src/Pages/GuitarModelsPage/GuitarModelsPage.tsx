import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import "./GuitarModelsPage.css";
import { useQuery } from "@apollo/client";
import brandQueries from "../../Graphql/Queries/brands";
import FilterSection from "../../Components/FilterSelection/FilterSelection";
import Button from "../../Components/Button/Button";
import { Spinner } from "../../Components/Spinner/Spinner";

export default function GuitarModelsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return;
  const { loading, error, data } = useQuery(
    brandQueries.GET_UNIQUE_BRAND_MODEL,
    {
      variables: { id },
      skip: !id,
    }
  );
  if (loading) return <Spinner />;
  if (error) return <p>Error loading model.</p>;
  //   console.log(data);

  const brand = data.findUniqueBrand;
  const products = data.findUniqueBrand.models;
  return (
    <div className="GuitarModelPage">
      <div className="btn">
        <Button
          text="Back To Home"
          arrow="left"
          onClick={() => navigate("/brands")}
        />
      </div>

      <Heading
        logo="../../images/logo.png"
        beforeSpan="Play like a"
        span=" Rock star"
        divStyle={{
          width: "672px",
          marginBottom: "40px",
          height: "460px",
          overflow: "visible",
        }}
        paragraph={`With a legacy dating back to the 1950s, ${brand.name} blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, Ibanez guitars are built to play fast, sound bold, and stand out on any stage. Ask ChatGPT`}
        photo={brand.image}
        hStyle={{ width: "536px" }}
        imgStyle={{
          width: "450px",
          height: "280px",
          objectFit: "contain",
          opacity: "40%",
          filter: "grayscale(100%)",
          margin: "5px ",
        }}
      />
      <div className="headingText">
        Check out the
        <span className="headingSpan"> Section</span>
      </div>
      <div className="guitars">
        <FilterSection
          categories={brand.categories}
          products={products}
          brand={brand}
        />
      </div>
    </div>
  );
}
