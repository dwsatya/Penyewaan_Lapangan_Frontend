import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  // Set login status dan role
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userRole = sessionStorage.getItem('role'); // Ambil role dari sessionStorage
    setIsLogin(!!token);
    setRole(userRole || ''); // Jika tidak ada role, default ''
  }, [isLogin]);

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role'); // Hapus role juga
    setIsLogin(false);

    // Alert
    Swal.fire({
      icon: 'success',
      title: 'Logout berhasil',
      text: 'Anda telah berhasil keluar!',
      showConfirmButton: false,
      timer: 2000,
    });

    // Redirect to signin
    navigate('/signin');
  };

  return (
    <div className='flex flex-row items-center justify-between px-20 h-20 fixed top-0 left-0 right-0 bg-white'>
      <div>
        <h1 className='font-Salsa text-mainblue text-3xl'>ShuttleBook.</h1>
      </div>
      <div className='flex items-center gap-5 text-xl'>
        {role !== 'admin' && ( // Hanya tampilkan menu jika bukan admin
          <div className='border-r-2 border-gray-400 pr-5'>
            <ul className='flex flex-row gap-5 text-gray-600 '>
              <li>
                <a href='/' className='hover:text-mainblue hover:underline '>
                  Beranda
                </a>
              </li>
              <a
                href='/lapangan'
                className='hover:text-mainblue hover:underline'
              >
                <li>Sewa Lapangan</li>
              </a>
              <li>
                <a href='/riwayat' className='hover:text-mainblue hover:underline '>
                  Riwayat
                </a>
              </li>
              <li>
                <a
                  href='/profile'
                  className='hover:text-mainblue hover:underline'
                >
                  Profile
                </a>
              </li>
              
            </ul>
          </div>
        )}
        {isLogin ? (
          <button
            type='button'
            onClick={handleLogout}
            className='bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white p-2 rounded-xl'
          >
            Keluar
          </button>
        ) : (
          <div className='flex gap-5'>
            <button className='text-gray-600 hover:underline hover:text-mainblue'>
              Daftar
            </button>
            <button className='bg-gray-600 hover:bg-mainblue transition duration-300 ease-in-out text-white p-2 rounded-xl'>
              <a href='/signin'>Masuk</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
