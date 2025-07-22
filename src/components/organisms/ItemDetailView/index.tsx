import {
  BreadcrumbAndId,
  ImageGallery,
  ProductDescription,
  ProductMainInfo,
} from "@/components/molecules";
import styles from "./styles.module.scss";
import { ItemDetailViewProps } from "./types";
import { ListTemplate } from "@/components/templates";

export const ItemDetailView = ({ item }: { item: ItemDetailViewProps }) => {
  const mainColor =
    item.attributes.find((a) => a.id === "MAIN_COLOR")?.value_name || "";

  return (
    <ListTemplate>
      <div className={styles.itemDetailView}>
        <BreadcrumbAndId
          id={item.id}
          categories={item.category_path_from_root}
        />
        <div className={styles.container}>
          <div className={styles.main}>
            <ImageGallery pictures={item.pictures} title={item.title} />
            <ProductMainInfo
              title={item.title}
              seller={
                item.attributes.find((a) => a.id === "SELLER")?.value_name ||
                item.seller ||
                "Desconocido"
              }
              price={item.price.amount}
              discount_price={item.price.regular_amount}
              installments={item.installments}
              free_shipping={item.free_shipping}
              mainColor={mainColor}
              condition={item.condition}
              sold_quantity={item.sold_quantity}
              warranty={item.warranty}
            />
          </div>
          {item.description && <ProductDescription text={item.description} />}
        </div>
      </div>
    </ListTemplate>
  );
};

export default ItemDetailView;
