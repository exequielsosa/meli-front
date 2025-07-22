export interface ItemDetailViewProps {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
    regular_amount: number | null;
  };
  pictures: string[];
  condition: "new" | "used" | string;
  free_shipping: boolean;
  sold_quantity?: number;
  warranty?: string;
  installments: string;
  description: string;
  seller?: string;
  attributes: {
    id: string;
    name: string;
    value_name: string;
  }[];
  category_path_from_root: string[];
}
