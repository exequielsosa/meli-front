import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";
import { BarTemplate } from "@/components/templates";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/items?search=${query}`);
  };

  return (
    <BarTemplate>
      <div className={styles.logoWrapper}>
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
        <form onSubmit={handleSubmit} className={styles.searchBox}>
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={styles.icon}>
            <img src="/assets/search.png" alt="Buscar" />
          </div>
        </form>
      </div>
    </BarTemplate>
  );
}
