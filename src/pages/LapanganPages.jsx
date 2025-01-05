import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';
import RentPopup from '../component/RentPopup'; // Import RentPopup
import Swal from 'sweetalert2';

const FetchLapangan = () => {
  const [lapangan, setLapangan] = useState([]);
  const [pelatih, setPelatih] = useState([]); // State untuk data pelatih
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedLapangan, setSelectedLapangan] = useState(null);

  useEffect(() => {
    const fetchLapangan = async () => {
      try {
        const lapanganResponse = await axios.get('http://localhost:8000/lapangan', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const pelatihResponse = await axios.get('http://localhost:8000/pelatih', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(lapanganResponse.data);
        setLapangan(lapanganResponse.data.data);
        setPelatih(pelatihResponse.data.data); // Mengambil data pelatih

        if (lapanganResponse.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Data berhasil dimuat!',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('Error fetching lapangan or pelatih data:', error);
      }
    };

    fetchLapangan();
  }, []);

  // Fungsi untuk membuka pop-up
  const handleOpenPopup = (lapangan) => {
    setSelectedLapangan(lapangan);
    setIsPopupOpen(true);
  };

  // Fungsi untuk menutup pop-up
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedLapangan(null);
  };

  return (
    <>
      <NavBar />
      <div className="pt-20 shadow-xl border rounded-lg border-gray-200 text-center my-5 mx-10">
        <h1 className="text-4xl font-bold p-4">Data Lapangan</h1>
      </div>

      {/* Card Layout for Lapangan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
        {lapangan && lapangan.length > 0 ? (
          lapangan.map((data) => (
            <div
              key={data.id}
              className="rounded-lg shadow-lg border border-gray-300 bg-white p-4 hover:shadow-xl transition"
            >
              <img
                src="/assets/lapangan1.png"
                alt={data.nama_lapangan}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">{data.nama_lapangan}</h2>
                <p className="text-gray-600 text-sm">{data.lokasi_lapangan}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  Rp{data.tarif_per_jam} <span className="text-sm text-gray-600">/jam</span>
                </p>
                <button
                  onClick={() => handleOpenPopup(data)} // membuka pop-up ketika tombol diklik
                  className="mt-4 w-full py-2 px-4 bg-mainblue text-white rounded-md hover:bg-blue-600 transition"
                >
                  Sewa Lapangan
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-4 text-gray-500">Data lapangan kosong . . .</div>
        )}
      </div>

      {/* RentPopup */}
      {isPopupOpen && selectedLapangan && (
        <RentPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          lapangan={selectedLapangan} // Kirim data lapangan yang dipilih ke RentPopup
          pelatih={pelatih} // Kirim data pelatih ke RentPopup
        />
      )}
    </>
  );
};

export default FetchLapangan;
