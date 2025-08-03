import type { Musician } from "./musicians.model";
import type { ProductSpecs } from "./product.specs.model";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  musicians: Musician[];
  price: number;
  specs: ProductSpecs;
  type: string;
}
