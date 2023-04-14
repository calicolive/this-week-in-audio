import Hero, { HeroSubtitle, HeroTitle } from '~/components/Hero';
import Container from '~/components/Container';

export default function Index() {
  return (
    <main className='mt-4 text-slate-950  '>
      <section className='relative isolate   overflow-hidden'>
        {/* bg image */}

        <img
          src='hero.png'
          alt='hero illustration '
          className='absolute inset-0 -z-10 h-full  w-full object-cover blur-[1px]'
        />
        <div className='absolute inset-0 -z-10 h-full w-full  bg-gradient-to-b from-slate-50 via-slate-50/5 to-slate-50 ' />

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
                className='flex-none rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Sign Up!
              </button>
            </form>
          </div>
        </Container>
      </section>
      <Container>
        <section className='px-2'>
          <h2 className='text-3xl font-bold'>Latest Issue</h2>
          <div className='border-b border-slate-950/50  mx-auto' />
        </section>
      </Container>
    </main>
  );
}
