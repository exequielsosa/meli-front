import styles from "./styles.module.scss";
import { ListTemplateProps } from "./types";

export const ListTemplate = ({ children }: ListTemplateProps) => {
  return (
    <div className={styles.listTemplate}>
      <div className={styles.listTemplateInside}>{children}</div>
    </div>
  );
};

export default ListTemplate;
