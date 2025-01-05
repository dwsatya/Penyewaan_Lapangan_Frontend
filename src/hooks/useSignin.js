import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { getUserName, getUserRole } from '../utils/Auth';

export const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signin = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        // Set token to session storage
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('role', response.data.role);

        // Alert success
        const name = getUserName();
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          text: `Halo ${name}!`,
          showConfirmButton: false,
          timer: 2000,
        });

        // Redirect according to role
        const role = getUserRole();
        setTimeout(() => {
          if (role === 'admin') {
            navigate('/admin');
          } else if (role === 'user') {
            navigate('/profile');
          }
        }, 2000);
      } else if (response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: 'Email atau Password salah!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      setError(error);
      // Handle error
      if (axios.isAxiosError(error && error.response)) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Terdapat kesalahan!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { signin, loading, error };
};
