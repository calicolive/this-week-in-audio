import React from 'react';
import Container from './Container';

export default function Footer() {
  return (
    <Container>
      <footer className='bg-slate-50'>
        <div className='border border-slate-100 mt-12 ' />
        <div className='mx-auto max-w-7xl px-6  md:flex md:items-center md:justify-center lg:px-8'>
          <div className='mt-4 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-gray-500'>
              &copy; 2023 OSC Audio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
