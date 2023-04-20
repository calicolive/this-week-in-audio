import Container from '~/components/Container';
import EmailSignup from '~/components/EmailSignUp';

export function meta() {
  return [
    {
      title: 'About',
    },
  ];
}

export default function About() {
  return (
    <section className='flex flex-col  items-center '>
      <div className='relative isolate overflow-hidden bg-slate-50 py-24 sm:py-32'>
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

            <EmailSignup sellerId='8418373618144' />
          </div>
        </div>
      </div>
    </section>
  );
}
