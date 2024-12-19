import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import Link from 'next/link';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = params;
  const postFilePath = path.join(process.cwd(), 'blog-posts', `${slug}.md`);

  if (!fs.existsSync(postFilePath)) {
    return <div className="max-w-5xl mx-auto py-16">Post not found</div>;
  }

  const content = fs.readFileSync(postFilePath, 'utf-8');
  const htmlContent = marked(content);

  return (
    <div className="max-w-2xl mx-auto py-32 blog-post">
      <Link href="/blog" className='underline'>Go Back</Link>
      <div
        className="prose prose-invert flex flex-col gap-y-4 text-lg max-w-3xl mx-auto px-8 md:px-0 mt-16"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default BlogPost;
