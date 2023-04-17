import { useLoaderData } from '@remix-run/react';
import Posts from '~/components/Posts';

import { client } from '~/lib/sanity';
import Container from '~/components/Container';

export const loader = async () => {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;
  const posts = await client.fetch(query);

  return { posts };
};

export default function NewsletterIndex() {
  const { posts } = useLoaderData();

  return (
    <Container>
      <div className=' py-12 sm:py-24 px-4'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Latest Issues
        </h2>

        <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
          <Posts posts={posts} />
        </div>
      </div>
    </Container>
  );
}
