import { useRouter } from "next/router";
import { useSearchResults } from "@/hooks/useSearchResults";
import { ProductList } from "@/components/organisms";
import { Loader, NoResults, ErrorPage } from "@/components/atoms";
import Head from "next/head";

export default function ItemsPage() {
  const router = useRouter();
  const search = router.query.search as string;

  const { items, loading, error } = useSearchResults(search);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  if (items.length === 0) return <NoResults />;

  return (
    <>
      <Head>
        <title>{search} | MercadoLibre</title>
      </Head>
      <ProductList items={items} />
    </>
  );
}
