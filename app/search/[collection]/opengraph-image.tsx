import OpengraphImage from 'components/opengraph-image';

export const runtime = 'edge';

export default async function Image({ params }: { params: { collection: string } }) {
  const collection = {} as any;
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
