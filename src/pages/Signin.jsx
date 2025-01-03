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
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Signin</h1>

      <form
        className='flex flex-col gap-5 mt-5'
        onSubmit={handleSubmit}
        method='post'
      >
        <input
          className='p-2'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={email} // Kontrol nilai input
          onChange={(e) => setEmail(e.target.value)} // Perbarui state email
        />
        <input
          className='p-2'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password} // Kontrol nilai input
          onChange={(e) => setPassword(e.target.value)} // Perbarui state password
        />
        <button
          className='border-2 bg-mainblue text-white'
          type='submit'
          disabled={loading} // Nonaktifkan tombol saat loading
        >
          {loading ? 'Signing in...' : 'Signin'}
        </button>
      </form>
    </div>
  );
};

export default Signin;
