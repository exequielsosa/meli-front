export interface ProductCardProps {
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
      regular_amount: number | null;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    installments: string;
    seller?: string;
    is_refurbished?: boolean;
  };
}