import Link from 'next/link';

const BlogFeature = () => {

  return (
    <section className='max-w-5xl flex flex-col gap-y-8 items-center my-32 mx-auto px-8 md:px-0'>
      <h2 className="text-4xl font-bold mt-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 pb-4">Featured Writing</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className="p-6 border border-neutral-800 rounded-lg max-w-4xl mx-auto shadow-md">
          <h2 className="text-3xl font-bold">StudySpaceFinder - A Case Study</h2>
          <p className="text-gray-400 mt-4">A dive into the story of how I created a tool used by hundreds of UVic students</p>
          <Link
            href="/blog/post1"
            className="inline-block mt-6 text-neutral-800 font-semibold bg-white px-4 py-2 rounded-lg"
            >
            Read More
          </Link>
        </div>
        <div className="p-6 border border-neutral-800 rounded-lg max-w-4xl mx-auto shadow-md">
          <h2 className="text-3xl font-bold">StudySpaceFinder - A Case Study</h2>
          <p className="text-gray-400 mt-4">A dive into the story of how I created a tool used by hundreds of UVic students</p>
          <Link
            href="/blog/post1"
            className="inline-block mt-6 text-neutral-800 font-semibold bg-white px-4 py-2 rounded-lg"
            >
            Read More
          </Link>
        </div>
      </div>
      <Link href="/blog" className='text-lg hover:underline'>Check out all my posts ⭢</Link>
    </section>
  );
};

export default BlogFeature;
