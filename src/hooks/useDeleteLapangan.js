import { useState } from 'react';
import axios from 'axios';

export const useDeleteLapangan = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const deleteLapangan = async (id) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.delete(
        `http://localhost:8000/lapangan/${id}`
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

  return { deleteLapangan, loading, error, success };
};