import Container from '~/components/Container';

export default function About() {
  return (
    <section className='flex flex-col  items-center '>
      <div className='relative isolate overflow-hidden bg-slate-50 py-24 sm:py-32'>
        {/* <img
            src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
            alt=''
            className='absolute inset-0 -z-10 h-full w-full object-cover'
          /> */}

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-center text-slate-950 sm:text-6xl'>
              About Us
            </h2>
            <p className='mt-6 text-lg leading-8  text-slate-700 '>
              Welcome to This Week in Audio, brought to you by OSC Audio! We are
              a dedicated team of audio enthusiasts with a passion for keeping
              you in the loop on everything happening in the world of audio.{' '}
            </p>
            <p className='mt-6 text-lg leading-8  text-slate-700 '>
              Our weekly newsletter is your go-to source for the latest news,
              articles, deals, and free promotions that will help you stay
              informed and make the most of your audio experiences. community!
            </p>

            <form
              className='mx-auto mt-10 flex gap-x-4 '
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
                className='w-full flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-slate-950/50 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <button
                id='gumroad-follow-form-embed-button'
                type='submit'
                className='flex-none rounded-md bg-slate-950 px-3.5 py-2.5 text-sm  text-slate-50 shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Sign Up!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
