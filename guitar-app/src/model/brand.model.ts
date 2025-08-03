export interface Brand {
  id: string;
  name: string;
  origin: string;
  image: string;
  categories: string[];
  models: [
    {
      id: string;
      name: string;
    }
  ];
}
