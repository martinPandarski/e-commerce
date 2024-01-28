import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import prisma from 'lib/prisma';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const products = await prisma.product.findMany({
    include: {
      featuredImage: true,
      priceRange: {
        include: {
          maxVariantPrice: true,
          minVariantPrice: true
        }
      }
    }
  });
  return (
    <>
      <ThreeItemGrid homepageItems={products}/>
      <Suspense>
        <Carousel products={products}/>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
