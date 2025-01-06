import axios from 'axios';

const usePostTransaksi = () => {
  const postTransaksi = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/transaksi',
        data
      );
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };

  return { postTransaksi };
};

export default usePostTransaksi;
