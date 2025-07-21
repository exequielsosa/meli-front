import styles from "./styles.module.scss";
import { BarTemplateProps } from "./types";

export const BarTemplate = ({ children }: BarTemplateProps) => {
  return (
    <div className={styles.barTemplate}>
      <div className={styles.barTemplateInside}>{children}</div>
    </div>
  );
};

export default BarTemplate;
