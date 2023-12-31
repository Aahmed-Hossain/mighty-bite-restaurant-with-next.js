export type MenuType = {
    _id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];

  export type ProductType = {
    _id: number;
    category: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };

