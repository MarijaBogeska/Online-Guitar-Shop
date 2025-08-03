import { gql } from "@apollo/client";

const GET_ALL_BRANDS = gql`
  query getAll {
    findAllBrands {
      id
      name
      origin
      image
      categories
      models {
        id
        name
      }
    }
  }
`;

const GET_UNIQUE_BRAND_MODEL = gql`
  query getUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        type
        image
        description
        price
        specs {
          bodyWood
          neckWood
          fingerboardWood
          pickups
          tuners
          scaleLength
          bridge
        }
        musicians {
          name
          musicianImage
          bands
        }
      }
    }
  }
`;

const GET_UNIQUE_MODEL = gql`
  query getUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

const brandQueries = {
  GET_ALL_BRANDS,
  GET_UNIQUE_BRAND_MODEL,
  GET_UNIQUE_MODEL,
};
export default brandQueries;
