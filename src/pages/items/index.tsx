import { useRouter } from "next/router";
import { useSearchResults } from "@/hooks/useSearchResults";
// import { ProductList } from "@/components/organisms";

export default function ItemsPage() {
  const router = useRouter();
  const search = router.query.search as string;

  const { items, categories, loading, error } = useSearchResults(search);

  if (!search) return <p>⚠️ Ingresá un término de búsqueda</p>;
  if (loading) return <p>⏳ Cargando productos...</p>;
  if (error) return <p>❌ Error: {error}</p>;
  if (items.length === 0) return <p>😢 No se encontraron resultados.</p>;

  return (
    <>
      {/* Más adelante podrías usar categories para un breadcrumb */}
      {/* <ProductList items={items} /> */}
      <p>Resultados</p>
    </>
  );
}
