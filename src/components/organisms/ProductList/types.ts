interface Price {
  currency: string;
  amount: number;
  decimals: number;
  regular_amount: number | null;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  installments: string;
}

export interface ProductListProps {
  items: Item[];
}
