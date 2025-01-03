import Link from 'next/link';
import { blogSource } from '@/app/source';
import { notFound } from 'next/navigation';

export default async function BlogsPage() {
    const blogs = await blogSource.getPages();

    if (!blogs || blogs.length === 0) {
        notFound();
    }

    const sortedBlogs = blogs.sort((a, b) => {
        const dateA = new Date(a.data.date || ''); 
        const dateB = new Date(b.data.date || ''); 
        return dateB.getTime() - dateA.getTime(); // Descending order
    });

    const noiseSvg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
  </svg>`;

    return (
        <main className="container max-sm:px-0">
            <div
                className="h-72 md:h-96 p-8 md:p-12 mb-8 mt-10 rounded-xl"
                style={{
                    backgroundImage: [
                        'radial-gradient(circle at 70% 10%, rgba(79, 70, 229, 0.5), transparent)',
                        'radial-gradient(circle at 0% 80%, rgba(99, 102, 241, 0.5), transparent)',
                        'radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.3), transparent)',
                        `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`,
                    ].join(', '),
                }}
            >
                <h1 className="mb-4 border-b-4 border-slate-800 pb-2 text-4xl font-bold md:text-5xl dark:border-white text-slate-800 dark:text-white">
                    Okto Blogs
                </h1>
                <p className="text-sm md:text-base text-slate-700 dark:text-white">
                    Insights, tutorials, and more from Okto
                </p>
            </div>

            <div className="grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3 rounded-md">
                {sortedBlogs.map((post) => (
                    <Link
                        key={post.url}
                        href={post.url}
                        className="flex flex-col p-6 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                        <h2 className="font-medium text-xl mb-2">{post.data.title}</h2>
                        {post.data.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                {post.data.description}
                            </p>
                        )}

                        <p className="mt-auto pt-4 text-xs text-gray-500 dark:text-gray-400">
                            {new Date(post.data.date ?? '').toDateString()}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
