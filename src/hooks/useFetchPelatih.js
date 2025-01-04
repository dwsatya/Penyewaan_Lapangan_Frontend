import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useFetchPelatih = () => {
  const [pelatih, setPelatih] = useState(null);

  useEffect(() => {
    const fetchPelatih = async () => {
      try {
        const response = await axios.get('http://localhost:8000/pelatih', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setPelatih(response.data.data);

        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Data berhasil dimuat!',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('Error fetching lapangan data:', error);
      }
    };

    fetchPelatih();
  }, []);

  return { pelatih };
};
