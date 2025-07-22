import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ItemDetailView } from "@/components/organisms";
import { Loader } from "@/components/atoms";
import { ItemDetail } from "@/types/itemDetail";

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

  return item ? <ItemDetailView item={item} /> : null;
}
