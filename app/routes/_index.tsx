import Hero, { HeroSubtitle, HeroTitle } from '~/components/Hero';
import Container from '~/components/Container';
import { client } from '~/lib/sanity';
import type { LoaderArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '~/lib/sanity';
import EmailSignup from '~/components/EmailSignUp';

export function meta() {
  return [
    {
      title: 'This Week in Audio',
      description:
        'Get all the latest audio news and deals directly to your inbox once a week',
    },
  ];
}

export const loader = async ({ params }: LoaderArgs) => {
  const query = `*[_type == 'post'] | order(_createdAt desc) [0] { _id, title, slug, mainImage, content }`;
  const latestPost = await client.fetch(query, params);

  return { latestPost };
};

const builder = imageUrlBuilder({ projectId, dataset });

export default function Index() {
  const { latestPost } = useLoaderData();

  return (
    <main className=' text-slate-950  '>
      <section className='relative isolate   overflow-hidden'>
        {/* bg image */}

        <img
          src='hero.png'
          alt='hero illustration '
          className='absolute inset-0 -z-10 h-full  w-full object-cover blur-[1px]'
        />
        <div className='absolute inset-0 -z-10 h-full w-full  bg-gradient-to-b from-cyan-200 via-fuchsia-400/40 to-slate-50 ' />

        <Container>
          <div className='flex flex-col items-center justify-center py-32   sm:py-48 lg:py-56'>
            <Hero>
              <HeroTitle>This Week in Audio</HeroTitle>
              <HeroSubtitle>
                Get all the latest audio news and deals <br /> directly to your
                inbox once a week
              </HeroSubtitle>
            </Hero>
            {/* email form */}

            <EmailSignup sellerId='8418373618144' />
            <p className='mt-6 text-sm font-medium text-slate-800'>
              Curated by the{' '}
              <a
                className='font-bold tracking-tighter text-slate-800 '
                href='https://oscaudio.gumroad.com/'>
                OSC Audio
              </a>{' '}
              team.
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <section className='mx-auto  max-w-7xl px-4 py-6 sm:py-0 sm:px-6  lg:px-8 '>
          <h2 className='text-3xl font-bold'>Latest Issue</h2>
          <div className='relative overflow-hidden rounded-lg '>
            <div className='absolute inset-0 '>
              <img
                src={builder.image(latestPost.mainImage).quality(80).url()}
                alt={latestPost.title}
                className='h-full w-full object-cover '
              />
            </div>
            <div className='relative bg-slate-950 bg-opacity-50 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 '>
              <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                <h2 className='text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl'>
                  {latestPost.title}
                </h2>

                <Link
                  to={`newsletter/${latestPost.slug.current}`}
                  className='mt-8 block w-full rounded-md border border-transparent bg-slate-50 px-8 py-3 text-base font-medium text-slate-950 hover:bg-gray-100 sm:w-auto'>
                  Read Issue
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
