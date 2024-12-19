import Link from 'next/link';
import { blogSource } from '@/app/source';
import { notFound } from 'next/navigation';

export default async function BlogsPage() {
  const blogs = await blogSource.getPages();

  if (!blogs || blogs.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <div key={post.url} className="border p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">{post.data.title}</h2>
            {post.data.description && (
              <p className="mt-2">{post.data.description}</p>
            )}
            <Link href={post.url} className="text-blue-500 hover:underline mt-4 block">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
