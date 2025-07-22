import styles from "./styles.module.scss";

export const ProductDescription = ({ text }: { text: string }) => (
  <div className={styles.description}>
    <h3>Descripción</h3>
    <p>{text}</p>
  </div>
);

export default ProductDescription;
