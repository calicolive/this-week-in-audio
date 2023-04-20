import React from 'react';

interface EmailSignupFormProps {
  sellerId: string;
  buttonText?: string;
  placeholderText?: string;
}

const EmailSignup: React.FC<EmailSignupFormProps> = ({
  sellerId,
  buttonText = 'Sign Up!',
  placeholderText = 'Enter your email',
}) => {
  return (
    <form
      className='mx-auto mt-10 flex gap-x-4'
      action='https://app.gumroad.com/follow_from_embed_form'
      method='post'
      id='gumroad-follow-form-embed'>
      <input type='hidden' name='seller_id' value={sellerId} />
      <label htmlFor='email-address' className='sr-only'>
        Email address
      </label>
      <input
        id='gumroad-follow-form-embed-input'
        type='email'
        name='email'
        autoComplete='email'
        required
        className='w-full flex-auto rounded-md border-0  bg-white px-3.5 py-2 text-slate-950 shadow-sm ring-2 ring-inset ring-slate-950 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
        placeholder={placeholderText}
      />
      <button
        id='gumroad-follow-form-embed-button'
        type='submit'
        className='flex-none rounded-md bg-slate-950 px-3.5 py-2.5 text-sm  text-slate-50 shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
        {buttonText}
      </button>
    </form>
  );
};

export default EmailSignup;
