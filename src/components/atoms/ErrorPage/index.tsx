import styles from "./styles.module.scss";

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <img
        src="/assets/errorimage.png"
        alt="Hubo un error"
        className={styles.image}
      />
      <p className={styles.text}>Hubo un error, intente nuevamente</p>
    </div>
  );
};

export default ErrorPage;
