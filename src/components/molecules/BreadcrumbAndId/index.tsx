import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { PropsBreadcrumbAndId } from "./types";

export const BreadcrumbAndId = ({ id, categories }: PropsBreadcrumbAndId) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <span className={styles.breadcrumb}>
        <button onClick={() => router.back()} className={styles.back}>
          Volver al listado
        </button>{" "}
        |{" "}
        {categories.map((cat, index) => (
          <span key={index}>
            {cat}
            {index < categories.length - 1 && " > "}
          </span>
        ))}
      </span>
      <span className={styles.id}>
        Publicación: <span className={styles.idValue}>#{id}</span>
      </span>
    </div>
  );
};

export default BreadcrumbAndId;
