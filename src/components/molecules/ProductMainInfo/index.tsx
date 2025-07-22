import styles from "./styles.module.scss";
import { formatPrice } from "@/utils/formatPrice";
import { PropsProductMainInfo } from "./types";
import { getDiscountPercentage } from "@/utils/getDiscountPercentage";

export const ProductMainInfo = ({
  title,
  seller,
  price,
  installments,
  free_shipping,
  mainColor,
  condition,
  sold_quantity,
  discount_price,
  warranty,
}: PropsProductMainInfo) => {
  console.log("ProductMainInfo rendered", condition);
  return (
    <div className={styles.info}>
      <p className={styles.sub}>
        {condition === "new" ? "Nuevo" : "Usado"} | {sold_quantity} vendidos
      </p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.seller}>Por {seller}</p>
      {discount_price && (
        <p className={styles.regular}>{formatPrice(discount_price)}</p>
      )}

      <div className={styles.containerPrice}>
        <div className={styles.containerPriceDiscount}>
          <p className={styles.price}>{formatPrice(price)}</p>

          {discount_price && discount_price > price && (
            <span className={styles.discount}>
              {getDiscountPercentage(discount_price, price)}% OFF
            </span>
          )}
        </div>
        {installments && (
          <p className={styles.installments}>
            Mismo precio en {installments} cuotas
          </p>
        )}
      </div>
      {free_shipping && <p className={styles.shipping}>Envío gratis</p>}
      {mainColor && (
        <p className={styles.color}>
          Color: <span className={styles.colorValue}>{mainColor}</span>
        </p>
      )}
      {warranty && (
        <p className={styles.color}>
          Garantía: <span className={styles.colorValue}>{warranty}</span>
        </p>
      )}
    </div>
  );
};

export default ProductMainInfo;
