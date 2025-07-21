import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/items?search=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBox}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}