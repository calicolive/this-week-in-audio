import Hero, { HeroSubtitle, HeroTitle } from '~/components/Hero';
import Container from '~/components/Container';
import { client } from '~/lib/sanity';
import type { LoaderArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '~/lib/sanity';

export const loader = async ({ params }: LoaderArgs) => {
  const query = `*[_type == 'post'] | order(_createdAt desc) [0] { _id, title, slug, mainImage, content }`;
  const latestPost = await client.fetch(query, params);

  return { latestPost };
};

const builder = imageUrlBuilder({ projectId, dataset });

export default function Index() {
  const { latestPost } = useLoaderData();
  console.log(latestPost.title);

  return (
    <main className=' text-slate-950  '>
      <section className='relative isolate   overflow-hidden'>
        {/* bg image */}

        <img
          src='hero.png'
          alt='hero illustration '
          className='absolute inset-0 -z-10 h-full  w-full object-cover blur-[1px]'
        />
        <div className='absolute inset-0 -z-10 h-full w-full  bg-gradient-to-b from-cyan-200 via-fuchsia-400/30 to-slate-50 ' />

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
            <form
              className='mx-auto mt-10 flex max-w-md gap-x-4 '
              action='https://app.gumroad.com/follow_from_embed_form'
              method='post'
              id='gumroad-follow-form-embed'>
              <input type='hidden' name='seller_id' value='8418373618144' />
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='gumroad-follow-form-embed-input'
                type='email'
                name='email'
                autoComplete='email'
                required
                className='min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-slate-950/50 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <button
                id='gumroad-follow-form-embed-button'
                type='submit'
                className='flex-none rounded-md bg-slate-950 px-3.5 py-2.5 text-sm  text-slate-50 shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Sign Up!
              </button>
            </form>

            <p className='mt-12 font-medium'>
              Join over 25,000 readers for one weekly email
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
