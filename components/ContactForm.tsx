'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/sendEmail';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className='lg:max-w-sm mx-auto'>
      <h2 className='font-bold text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500'>Let&apos;s keep in touch</h2>
      <p className='text-neutral-400 mb-6'>
        Send me an email at <strong>skenning128@gmail.com</strong> or fill out the form below to get in contact
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block text-base mb-2'
            >
            Name
          </label>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full rounded-md bg-transparent border border-white/20 py-3 px-6 text-base font-medium text-neutral-400 placeholder-neutral-500 outline-none focus:border focus:border-white/40'
            {...register('name', { required: true })}
            />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-base mb-2'
            >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@email.com'
            className='w-full rounded-md bg-transparent border border-white/20 py-3 px-6 text-base font-medium text-neutral-400 placeholder-neutral-500 outline-none focus:border focus:border-white/40'
            {...register('email', { required: true })}
            />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='block text-base mb-2'
            >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message here"
            className='resize-none w-full rounded-md bg-transparent border border-white/20 py-3 px-6 text-base font-medium text-neutral-400 placeholder-neutral-500 outline-none focus:border focus:border-white/40'
            {...register('message', { required: true })}
            ></textarea>
        </div>
        <div>
          <button className='rounded-lg bg-white py-3 px-8 text-black font-semibold outline-none'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm