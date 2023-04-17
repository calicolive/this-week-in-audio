import { Link } from '@remix-run/react';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '~/lib/sanity';
const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <section className=' flex flex-col justify-center items-center'>
      <ul className='space-y-20 sm:w-2/3 w-full text-lg mt-10 '>
        {posts?.length > 0 ? (
          posts.map((post) => {
            const createdAt = new Date(post._createdAt);
            const formattedDate = createdAt.toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
            });

            return (
              <article
                key={post._id}
                className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
                <img
                  src={builder.image(post.mainImage).url()}
                  alt=''
                  className='absolute inset-0 -z-10 h-full w-full object-cover'
                />
                <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
                <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

                <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
                  <time dateTime={post._createdAt} className='mr-8'>
                    {formattedDate}
                  </time>
                </div>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
                  <Link to={post.slug.current}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </Link>
                </h3>
              </article>
            );
          })
        ) : (
          <div className='p-4 text-red-500'>No posts found</div>
        )}
      </ul>
    </section>
  );
}
