import { Link } from '@remix-run/react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );
  useEffect(() => {
    return scrollY.onChange((current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYBoundedProgress } = useBoundedScroll(200);
  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.15, 1],
    [0, 0, 1]
  );

  return (
    <AnimatePresence mode='popLayout' initial={false}>
      <motion.header
        layout
        style={{
          height: useTransform(
            scrollYBoundedProgressThrottled,
            [0, 1],
            [60, 40]
          ),
          // boxShadow: useTransform(
          //   scrollYBoundedProgressThrottled,
          //   [0, 1],
          //   ['0px 0px 0px 0px #FFFFFF', '0px 0px 5px 0px #020617']
          // ),
        }}
        exit={{ opacity: 1, transition: { duration: 0.2 } }}
        className='sticky top-0 z-30 flex h-12 w-full items-center justify-between bg-slate-50 px-6 shadow-sm  text-slate-950  '>
        <div className='flex items-center space-x-2 '>
          <Link
            preventScrollReset
            to={'/'}
            className='text-2xl font-bold tracking-tight'>
            <motion.p
              style={{
                scale: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0.9]
                ),
              }}>
              This Week in Audio
            </motion.p>
          </Link>
        </div>
        {/* desktop Nav */}
        <motion.nav
          style={{
            opacity: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [1, 0]
            ),
          }}
          className=' hidden flex-1 space-x-12 text-right   md:block'>
          <Link to='/newsletter' className=''>
            Newsletter
          </Link>
          <Link to='/about' className=''>
            About
          </Link>
          <Link target='_blank' to='https://discord.gg/qV2YXdMQRM' className=''>
            Discord
          </Link>
        </motion.nav>
        {/* mobile nav */}
        <div className='flex-1 text-right md:hidden'>
          <motion.button
            style={{
              scale: useTransform(
                scrollYBoundedProgressThrottled,
                [0, 1],
                [1, 0.9]
              ),
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setIsOpen(true);
            }}>
            <Bars3Icon className='h-8 w-8' />
          </motion.button>
          {isOpen && (
            <Dialog
              static
              key={'mobile-nav'}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className='relative z-40 '>
              <Dialog.Overlay className='fixed inset-0  bg-slate-950/50' />
              <div className=' fixed inset-0 flex justify-end  overflow-hidden '>
                <Dialog.Panel className='w-full max-w-xs  bg-slate-50 shadow-xl'>
                  <div className=' flex flex-col px-6 text-slate-950'>
                    <div className='flex h-14 items-center justify-end'>
                      <button onClick={() => setIsOpen(false)}>
                        <XMarkIcon className='h-8 w-8 text-slate-950' />
                      </button>
                    </div>
                    <nav className=' flex flex-col space-y-12  '>
                      <Link
                        preventScrollReset
                        to='/newsletter'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        Newsletter
                      </Link>
                      <Link
                        to='/about'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        About
                      </Link>
                      <Link
                        target='_blank'
                        to='https://discord.gg/qV2YXdMQRM'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        Discord
                      </Link>
                    </nav>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
