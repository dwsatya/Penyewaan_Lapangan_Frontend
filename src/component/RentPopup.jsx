import { useState } from 'react';

const RentPopup = ({ isOpen, onClose, lapangan, pelatih }) => {
  const [formData, setFormData] = useState({
    pelatih: '',
    durasi: '',
    tanggal: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Penyewaan:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative">
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="flex">
          {/* Bagian Kiri: Informasi Lapangan */}
          <div className="w-1/2 pr-4">
            <img
              src="/assets/lapangan1.png"
              alt={lapangan.nama_lapangan}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">{lapangan.nama_lapangan}</h2>
            <p className="text-gray-600">{lapangan.lokasi_lapangan}</p>
            <p className="mt-2 font-semibold">
              Rp{lapangan.tarif_per_jam} <span className="text-sm text-gray-600">/jam</span>
            </p>
          </div>

          {/* Bagian Kanan: Form Penyewaan */}
          <div className="w-1/2 pl-4">
            <h3 className="text-xl font-semibold mb-4">Form Penyewaan</h3>
            <form onSubmit={handleSubmit}>
              {/* Pilih Pelatih */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Pilih Pelatih (Opsional)</label>
                <select
                  name="pelatih"
                  value={formData.pelatih}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-mainblue"
                >
                  <option value="">Tidak Memilih Pelatih</option>
                  {pelatih.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nama_pelatih} (Rp{p.tarif_per_jam}/jam)
                    </option>
                  ))}
                </select>
              </div>

              {/* Durasi Penyewaan */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Durasi (Jam)</label>
                <input
                  type="number"
                  name="durasi"
                  value={formData.durasi}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-mainblue"
                  placeholder="Masukkan jumlah jam"
                />
              </div>

              {/* Tanggal Penyewaan */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Tanggal Penyewaan</label>
                <input
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-mainblue"
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-mainblue text-white rounded-md hover:bg-blue-600 transition"
              >
                Sewa Lapangan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentPopup;
