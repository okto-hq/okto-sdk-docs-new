import { blogSource } from '@/app/source';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await blogSource.getPage([params.slug]);

  if (!post) {
    notFound();
  }

  const MDXContent = post.data.body;

  return (
    <article className="prose mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
      {post.data.date && (
        <p className="text-sm text-gray-600 mb-8">{new Date(post.data.date).toLocaleDateString()}</p>
      )}
      <MDXContent />
    </article>
  );
} 