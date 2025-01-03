import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';
import Swal from 'sweetalert2';

const FetchLapangan = () => {
  const [lapangan, setLapangan] = useState([]);

  useEffect(() => {
    const fetchLapangan = async () => {
      try {
        const response = await axios.get('http://localhost:8000/lapangan', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(response.data);
        setLapangan(response.data.data);

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

    fetchLapangan();
  }, []);

  return (
    <>
      <NavBar />
      <div className='pt-20 shadow-xl border rounded-lg border-gray-200 text-center my-5 mx-10'>
        <h1 className='text-4xl font-bold p-4'>Data Lapangan</h1>
      </div>

      <div>
        <table className='border-2 w-full'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>Nama Lapangan</th>
              <th className='border px-4 py-2'>Lokasi Lapangan</th>
              <th className='border px-4 py-2'>Tarif Perjam</th>
            </tr>
          </thead>
          <tbody>
            {lapangan && lapangan.length > 0 ? (
              lapangan.map((data) => (
                <tr key={data.id}>
                  <td className='border px-4 py-2'>{data.nama_lapangan}</td>
                  <td className='border px-4 py-2'>{data.lokasi_lapangan}</td>
                  <td className='border px-4 py-2'>{data.tarif_per_jam}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='3' className='text-center py-2'>
                  Data lapangan kosong . . .
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FetchLapangan;
