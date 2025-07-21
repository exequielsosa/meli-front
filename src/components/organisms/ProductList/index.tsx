import styles from "./styles.module.scss";
import { ProductCard } from "../ProductCard";
import { ProductListProps } from "./types";
import { ListTemplate } from "@/components/templates";

export const ProductList = ({ items }: ProductListProps) => {
  return (
    <ListTemplate>
      <div className={styles.list}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </ListTemplate>
  );
};

export default ProductList;
