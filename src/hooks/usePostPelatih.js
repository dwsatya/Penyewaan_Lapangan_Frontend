import { useState } from 'react';
import axios from 'axios';

export const usePostPelatih = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const postPelatih = async (lapanganData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        'http://localhost:8000/pelatih',
        lapanganData
      ); // Sesuaikan URL dengan API Anda
      setSuccess(true);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError({ message: 'Terjadi kesalahan jaringan atau server.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return { postPelatih, loading, error, success };
};
