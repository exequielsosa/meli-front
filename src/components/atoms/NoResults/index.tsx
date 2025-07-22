import styles from "./styles.module.scss";

export const NoResults = () => {
  return (
    <div className={styles.container}>
      <img
        src="/assets/noresults.png"
        alt="No se encontraron resultados"
        className={styles.image}
      />
      <p className={styles.text}>No se encontraron resultados</p>
    </div>
  );
};

export default NoResults;
