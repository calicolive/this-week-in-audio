import { Link } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed inset-0  w-screen z-30 flex h-12  items-center justify-between bg-slate-50 px-6 shadow-sm  text-slate-950  '>
      <div className='flex items-center space-x-2 '>
        <Link
          preventScrollReset
          to={'/'}
          className='text-2xl font-bold tracking-tight'>
          This Week in Audio
        </Link>
      </div>
      {/* desktop Nav */}
      <nav className=' hidden flex-1 space-x-12 text-right   md:block'>
        <Link to='/newsletter' className=''>
          Newsletter
        </Link>
        <Link to='/about' className=''>
          About
        </Link>
        <Link target='_blank' to='https://discord.gg/qV2YXdMQRM'>
          Discord
        </Link>
      </nav>
      {/* mobile nav */}
      <div className='flex-1 text-right md:hidden'>
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsOpen(true);
          }}>
          <Bars3Icon className='h-8 w-8' />
        </button>
        <AnimatePresence>
          {isOpen && (
            <Dialog
              static
              key={'mobile-nav'}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0 }}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className='relative z-30 '>
              <Dialog.Overlay className='fixed inset-0  bg-slate-950/50' />
              <div className=' fixed inset-0 flex justify-end  overflow-hidden '>
                <Dialog.Panel className='w-full max-w-xs  bg-slate-50 shadow-xl'>
                  <div className=' flex flex-col px-6 text-slate-950'>
                    <div className='flex h-12 items-center justify-end'>
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
        </AnimatePresence>
      </div>
    </header>
  );
}
