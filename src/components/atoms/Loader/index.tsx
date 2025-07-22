import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loader;
