import styles from "./styles.module.scss";
import { ProductCardProps } from "./types";
import { formatPrice } from "@/utils/formatPrice";
import { getDiscountPercentage } from "@/utils/getDiscountPercentage";
import Link from "next/link";

export const ProductCard = ({ item }: ProductCardProps) => {
  const {
    title,
    price,
    picture,
    condition,
    free_shipping,
    installments,
    seller,
    is_refurbished,
  } = item;

  const { id } = item;

  return (
    <Link href={`/items/${id}`} className={styles.link}>
      <div className={styles.card}>
        <img src={picture} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.seller}>Por {seller}</h4>
          {price.regular_amount && (
            <p className={styles.regular}>
              {formatPrice(price.regular_amount)}
            </p>
          )}
          <div className={styles.containerPriceDiscount}>
            <div className={styles.containerPriceAndDiscount}>
              <p className={styles.price}>{formatPrice(price.amount)}</p>
              {price.regular_amount && price.regular_amount > price.amount && (
                <span className={styles.discount}>
                  {getDiscountPercentage(price.regular_amount, price.amount)}%
                  OFF
                </span>
              )}
            </div>
            {installments && parseInt(installments) > 1 && (
              <p className={styles.installments}>
                Mismo precio en {installments} cuotas
              </p>
            )}
          </div>
          {free_shipping && <p className={styles.shipping}>Envío gratis</p>}
          {condition === "used" && <p className={styles.used}>Usado</p>}
          {is_refurbished && <p className={styles.used}>Reacondicionado</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
