import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { formatPrice } from "@/utils/formatPrice";

export default function ItemDetailPage() {
  const { id } = useRouter().query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/items/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data.item));
    }
  }, [id]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictures[0]} alt={item.title} width={400} />
      <p>{formatPrice(item.price.amount)}</p>
      <p>{item.installments}</p>
      <p>{item.free_shipping ? "Envío gratis" : "Sin envío gratis"}</p>
      <p>Condición: {item.condition}</p>
      <p>Vendidos: {item.sold_quantity}</p>
      <p>Descripción: {item.description}</p>
      {item.attributes.find((attr) => attr.id === "MAIN_COLOR") && (
        <p>
          Color:{" "}
          {item.attributes.find((attr) => attr.id === "MAIN_COLOR")?.value_name}
        </p>
      )}
    </div>
  );
}
