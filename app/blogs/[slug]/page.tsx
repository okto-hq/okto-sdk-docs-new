import { blogSource } from '@/app/source';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);
 
  if (!page) notFound();
 
  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = blogSource.getPage([params.slug]);

  if (!post) notFound();
  const MDXContent = post.data.body;

  const noiseSvg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
  </svg>`;

  return (
    <main className="container max-w-6xl mx-auto px-4">
      <div
        className="h-[200px] md:h-[300px] p-8 md:p-12 mb-8 mt-10 rounded-xl relative"
        style={{
            backgroundImage: [
                'radial-gradient(circle at 70% 10%, rgba(79, 70, 229, 0.5), transparent)',
                'radial-gradient(circle at 0% 80%, rgba(99, 102, 241, 0.5), transparent)',
                'radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.3), transparent)',
                `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`,
            ].join(', '),
        }}
      >
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/20 to-transparent rounded-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            {post.data.title}
          </h1>
          <p className="mb-4 text-white">{post.data.description}</p>
          {post.data.date && (
            <p className="text-sm text-black/70 dark:text-white/70">
              {new Date(post.data.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
        </div>
      </div>

      <article className="prose prose-lg dark:prose-invert mx-auto mb-12 p-6 rounded-xl bg-white dark:bg-inherit shadow-sm">
      <div className="prose min-w-0">
          <InlineTOC items={post.data.toc} />
          <MDXContent components={defaultMdxComponents} />
        </div>
      </article>
    </main>
  );
} 

export function generateStaticParams(): { slug: string }[] {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}