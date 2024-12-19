import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const BlogPage = async () => {
  const postsFilePath = path.join(process.cwd(), 'blog-posts', 'posts.json');
  const posts: BlogPost[] = JSON.parse(fs.readFileSync(postsFilePath, 'utf-8'));

  return (
    <div className="max-w-5xl mx-auto py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 mt-16">Blog Posts</h1>
      <div className='h-[2px] bg-neutral-200 w-100 mb-8 rounded'></div>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="py-4 text-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="">{post.description}</p>
            <p className="text-sm text-neutral-500">{new Date(post.date).toLocaleDateString()}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline mt-2 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
