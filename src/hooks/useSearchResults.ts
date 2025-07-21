import { useEffect, useState } from "react";

export function useSearchResults(query: string) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/items?q=${query}`);
        if (!res.ok) throw new Error("Error al buscar productos");
        const data = await res.json();
        setItems(data.items);
        setCategories(data.categories);
      } catch (err: any) {
        setError(err.message || "Error inesperado");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return { items, categories, loading, error };
}
