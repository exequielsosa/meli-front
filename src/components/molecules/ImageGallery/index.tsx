import styles from "./styles.module.scss";
import { useState } from "react";
import { PropsImageGallery } from "./types";

export const ImageGallery = ({ pictures, title }: PropsImageGallery) => {
  const [mainImage, setMainImage] = useState(pictures[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {pictures.slice(0, 7).map((pic) => (
          <img
            key={pic}
            src={pic}
            alt={title}
            className={pic === mainImage ? styles.active : ""}
            onClick={() => setMainImage(pic)}
          />
        ))}
      </div>
      <div className={styles.main}>
        <img src={mainImage} alt={title} />
      </div>
    </div>
  );
};

export default ImageGallery;
