import { useState } from 'react';
import axios from 'axios';

export const useUpdateLapangan = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateLapangan = async (id, data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.put(
        `http://localhost:8000/lapangan/${id}`,
        data
      );
      setSuccess(true);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateLapangan, loading, error, success };
};
