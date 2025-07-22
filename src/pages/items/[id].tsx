import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ItemDetailView } from "@/components/organisms";
import { Loader } from "@/components/atoms";
import { ItemDetail } from "@/types/itemDetail";
import Head from "next/head";

export default function ItemDetailPage() {
  const router = useRouter();
  const id = typeof router.query.id === "string" ? router.query.id : undefined;

  const [item, setItem] = useState<ItemDetail | null>(null);
  const [hasTriedLoading, setHasTriedLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/items/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.item) {
            setItem(data.item);
          } else {
            setItem(null);
          }
        })
        .catch(() => setItem(null))
        .finally(() => setHasTriedLoading(true));
    }
  }, [id]);

  useEffect(() => {
    if (hasTriedLoading && !item) {
      router.push("/");
    }
  }, [hasTriedLoading, item, router]);

  if (!hasTriedLoading) return <Loader />;

  return item ? (
    <>
      <Head>
        <title>{item.title} | MercadoLibre</title>
        <meta
          name="description"
          content={`Compra ${item.title} al mejor precio. Envío gratis y cuotas disponibles.`}
        />
        <meta property="og:title" content={`${item.title} | MercadoLibre`} />
        <meta
          property="og:description"
          content={`Compra ${item.title} con envío gratis y cuotas. ¡Entrá ahora!`}
        />
        <meta property="og:image" content={item.pictures[0]} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ItemDetailView item={item} />
    </>
  ) : null;
}
