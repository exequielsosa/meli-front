export interface PropsProductMainInfo {
  title: string;
  seller: string;
  price: number;
  installments: string;
  free_shipping: boolean;
  mainColor?: string;
  condition?: string;
  sold_quantity?: number;
  discount_price?: number | null;
  warranty?: string;
}