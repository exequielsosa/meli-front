import { useRouter } from "next/router";
import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { BarTemplate } from "@/components/templates";
import WelcomeTooltip from "../WelcomeTooltip";

export const SearchBox = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchBoxRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/items?search=${query}`);
  };

  return (
    <BarTemplate>
      <div className={styles.logoWrapper} onClick={() => router.push("/")}>
        <img
          src="/assets/logo_large_25years.png"
          alt="Logo grande"
          className={styles.logoLarge}
        />
        <img
          src="/assets/logo__small.png"
          alt="Logo chico"
          className={styles.logoSmall}
        />
      </div>
      <div className={styles.containerForm}>
        <form
          onSubmit={handleSubmit}
          className={styles.searchBox}
          ref={searchBoxRef}
        >
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={styles.iconWrapper}>
            <div className={styles.icon} onClick={handleSubmit}>
              <img src="/assets/search.png" alt="Buscar" />
            </div>
          </div>
        </form>
        <WelcomeTooltip anchorRef={searchBoxRef} />
      </div>
    </BarTemplate>
  );
};

export default SearchBox;
