import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { PropsWelcomeTooltip } from "./types";

const WelcomeTooltip = ({ anchorRef }: PropsWelcomeTooltip) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("welcomeTooltipShown");
    if (!alreadyShown) {
      setVisible(true);
      localStorage.setItem("welcomeTooltipShown", "true");
    }
  }, []);

  useEffect(() => {
    if (visible && anchorRef.current && tooltipRef.current) {
      const iconRect = anchorRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      setPosition({
        top: iconRect.bottom + 10 + window.scrollY,
        left:
          iconRect.left + iconRect.width - tooltipRect.width + window.scrollX,
      });
    }
  }, [visible, anchorRef]);

  if (!visible) return null;

  return (
    <div
      className={styles.tooltip}
      ref={tooltipRef}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
    >
      <div className={styles.arrow} />
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.title}>Hola</span>
          <button onClick={() => setVisible(false)}>X</button>
        </div>
        <p>
          Para realizar búsquedas, solo debes ingresar el nombre de lo que
          necesites. Pueden ser productos, marcas y más…
        </p>
      </div>
    </div>
  );
};

export default WelcomeTooltip;
