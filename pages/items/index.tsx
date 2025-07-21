import { useRouter } from 'next/router';
import ProductList from '@/components/organisms/ProductList';

export default function Items() {
  const { query } = useRouter();
  return <ProductList searchTerm={query.search as string} />;
}