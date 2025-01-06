import { useState } from 'react';
import NavBar from '../component/NavBar';
import { useFetchLapangan } from '../hooks/useFetchLapangan';
import { usePostLapangan } from '../hooks/usePostLapangan';
import { useDeleteLapangan } from '../hooks/useDeleteLapangan';
import { useUpdateLapangan } from '../hooks/usePutLapangan';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const AdminLapangan = () => {
  const { lapangan } = useFetchLapangan();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama_lapangan: '',
    lokasi_lapangan: '',
    tarif_per_jam: '',
  });

  const { postLapangan, loading, error, success } = usePostLapangan();
  const { deleteLapangan } = useDeleteLapangan();
  const { updateLapangan } = useUpdateLapangan();

  const handleCreate = () => {
    setIsModalOpen(true); // Buka modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Tutup modal
    setFormData({
      nama_lapangan: '',
      lokasi_lapangan: '',
      tarif_per_jam: '',
    }); // Reset form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        // Jika ada ID, berarti update
        await updateLapangan(formData.id, {
          nama_lapangan: formData.nama_lapangan,
          lokasi_lapangan: formData.lokasi_lapangan,
          tarif_per_jam: formData.tarif_per_jam,
        });
      } else {
        // Jika tidak ada ID, berarti create
        await postLapangan(formData);
      }
      handleModalClose();

      setTimeout(() => {
        window.location.reload();
      });
    } catch (err) {
      console.error('Error saving lapangan:', err);
    }
  };

  const handleUpdate = (id) => {
    const lapanganData = lapangan.find((item) => item.id === id);
    if (lapanganData) {
      setFormData({
        id: lapanganData.id,
        nama_lapangan: lapanganData.nama_lapangan,
        lokasi_lapangan: lapanganData.lokasi_lapangan,
        tarif_per_jam: lapanganData.tarif_per_jam,
      });
      setIsModalOpen(true); // Buka modal
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus lapangan ini?')) {
      try {
        await deleteLapangan(id);
        setTimeout(() => {
          window.location.reload();
        });
      } catch (err) {
        console.error('Error deleting lapangan:', err);
      }
    }
  };

  return (
    <div className='flex flex-col bg-mainblue h-screen'>
      <NavBar />
      <div className='mt-24 shadow-xl border rounded-lg border-gray-200 text-center bg-gray-100 my-5 mx-10'>
        <h1 className='text-4xl font-bold p-4'>Data Lapangan</h1>
      </div>

      <div className='bg-white mx-20'>
        <table className='border-2 w-full'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>Nama Lapangan</th>
              <th className='border px-4 py-2'>Lokasi Lapangan</th>
              <th className='border px-4 py-2'>Tarif Perjam</th>
              <th className='border px-4 py-2'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lapangan && lapangan.length > 0 ? (
              lapangan.map((data) => (
                <tr key={data.id}>
                  <td className='border text-center px-4 py-2'>
                    {data.nama_lapangan}
                  </td>
                  <td className='border text-center px-4 py-2'>
                    {data.lokasi_lapangan}
                  </td>
                  <td className='border text-center px-4 py-2'>
                    {data.tarif_per_jam}
                  </td>
                  <td className='border py-2'>
                    <div className='flex justify-center gap-5'>
                      <button
                        onClick={() => handleUpdate(data.id)}
                        className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded mx-1'
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mx-1'
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='text-center py-2'>
                  Data lapangan kosong . . .
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='flex justify-end mt-4 pr-2 pb-2'>
          <button
            onClick={handleCreate}
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center'
          >
            <FaPlus className='mr-2' />
            Create
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white rounded-lg shadow-lg p-6 w-1/3'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Tambah Lapangan</h2>
              <button onClick={handleModalClose}>
                <FaTimes className='text-red-500' />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='nama_lapangan'
                >
                  Nama Lapangan
                </label>
                <input
                  type='text'
                  id='nama_lapangan'
                  name='nama_lapangan'
                  value={formData.nama_lapangan}
                  onChange={handleChange}
                  className='border rounded w-full p-2'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='lokasi_lapangan'
                >
                  Lokasi Lapangan
                </label>
                <input
                  type='text'
                  id='lokasi_lapangan'
                  name='lokasi_lapangan'
                  value={formData.lokasi_lapangan}
                  onChange={handleChange}
                  className='border rounded w-full p-2'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='tarif_per_jam'
                >
                  Tarif Per Jam
                </label>
                <input
                  type='number'
                  id='tarif_per_jam'
                  name='tarif_per_jam'
                  value={formData.tarif_per_jam}
                  onChange={handleChange}
                  className='border rounded w-full p-2'
                  required
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
              {error && <p className='text-red-500 mt-2'>{error.message}</p>}
              {success && (
                <p className='text-green-500 mt-2'>Berhasil ditambahkan!</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLapangan;
