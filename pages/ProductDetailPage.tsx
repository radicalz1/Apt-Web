import { useParams, Navigate } from 'react-router-dom';
import { productsData } from '../data/products.ts';
import { useTitle } from '../hooks/useTitle.ts';
import { useMeta } from '../hooks/useMeta.ts';
import { Section } from '../components/common/Section.tsx';
import { ProductImage } from '../components/product/ProductImage.tsx';
import { ProductInfo } from '../components/product/ProductInfo.tsx';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id));

  useTitle(product ? product.name : 'Product Not Found');
  useMeta('description', product ? product.longDescription : 'Product details page.');

  if (!product) {
    return <Navigate to="/400" replace />;
  }

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <ProductImage imageUrl={product.imageUrl} name={product.name} />
        <ProductInfo product={product} />
      </div>
    </Section>
  );
}
