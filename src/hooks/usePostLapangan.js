import { useState } from 'react';
import axios from 'axios';

export const usePostLapangan = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const postLapangan = async (lapanganData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        'http://localhost:8000/lapangan',
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

  return { postLapangan, loading, error, success };
};
