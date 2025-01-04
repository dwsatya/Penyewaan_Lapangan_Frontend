import { useSignin } from '../hooks/useSignin';
import { useState } from 'react';

const Signin = () => {
  const { signin, loading } = useSignin(); // Ambil state `loading` untuk kontrol UI
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    await signin(email, password); // Panggil fungsi signin dengan parameter email dan password
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-mainblue mb-6'>
          Sign In
        </h1>

        <form
          className='flex flex-col gap-4'
          onSubmit={handleSubmit}
          method='post'
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email Address
            </label>
            <input
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainblue'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Password
            </label>
            <input
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainblue'
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className={`w-full py-3 rounded-lg text-white ${
              loading
                ? 'bg-mainblue/70 cursor-not-allowed'
                : 'bg-mainblue hover:bg-mainblue-dark'
            } transition-all duration-200`}
            type='submit'
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-gray-600'>
          Dont have an account?{' '}
          <a
            href='/signup'
            className='text-mainblue font-medium hover:underline'
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
