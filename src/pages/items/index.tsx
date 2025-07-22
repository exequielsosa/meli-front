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
        <meta
          name="description"
          content={`Encontrá ${search} entre los mejores productos. Precios bajos y envío gratis.`}
        />
        <meta property="og:title" content={`${search} | MercadoLibre`} />
        <meta
          property="og:description"
          content={`Resultados para ${search}. Envío gratis y cuotas disponibles.`}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <ProductList items={items} />
    </>
  );
}
