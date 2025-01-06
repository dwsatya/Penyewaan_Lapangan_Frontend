import { useState } from 'react';
import NavBar from '../component/NavBar';
import { useFetchPelatih } from '../hooks/useFetchPelatih';
import { usePostPelatih } from '../hooks/usePostPelatih';
import { useDeletePelatih } from '../hooks/useDeletePelatih';
import { useUpdatePelatih } from '../hooks/useUpdatePelatih';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const AdminPelatih = () => {
  const { pelatih } = useFetchPelatih();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama_pelatih: '',
    no_telepon: '',
    tarif_per_jam: '',
  });

  const { postPelatih, loading, error, success } = usePostPelatih();
  const { deletePelatih } = useDeletePelatih();
  const { updatePelatih } = useUpdatePelatih();

  const handleCreate = () => {
    setIsModalOpen(true); // Buka modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Tutup modal
    setFormData({
      nama_pelatih: '',
      no_telepon: '',
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
        await updatePelatih(formData.id, {
          nama_pelatih: formData.nama_pelatih,
          no_telepon: formData.no_telepon,
          tarif_per_jam: formData.tarif_per_jam,
        });
      } else {
        // Jika tidak ada ID, berarti create
        await postPelatih(formData);
      }
      handleModalClose();

      setTimeout(() => {
        window.location.reload();
      });
    } catch (err) {
      console.error('Error saving Pelatih:', err);
    }
  };

  const handleUpdate = (id) => {
    const pelatihData = pelatih.find((item) => item.id === id);
    if (pelatihData) {
      setFormData({
        id: pelatihData.id,
        nama_pelatih: pelatihData.nama_pelatih,
        no_telepon: pelatihData.no_telepon,
        tarif_per_jam: pelatihData.tarif_per_jam,
      });
      setIsModalOpen(true); // Buka modal
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus lapangan ini?')) {
      try {
        await deletePelatih(id);
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
              <th className='border px-4 py-2'>Nama Pelatih</th>
              <th className='border px-4 py-2'>Nomor Telepon</th>
              <th className='border px-4 py-2'>Tarif Perjam</th>
              <th className='border px-4 py-2'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pelatih && pelatih.length > 0 ? (
              pelatih.map((data) => (
                <tr key={data.id}>
                  <td className='border text-center px-4 py-2'>
                    {data.nama_pelatih}
                  </td>
                  <td className='border text-center px-4 py-2'>
                    {data.no_telepon}
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
              <h2 className='text-xl font-bold'>Tambah Pelatih</h2>
              <button onClick={handleModalClose}>
                <FaTimes className='text-red-500' />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='nama_pelatih'
                >
                  Nama Lapangan
                </label>
                <input
                  type='text'
                  id='nama_pelatih'
                  name='nama_pelatih'
                  value={formData.nama_pelatih}
                  onChange={handleChange}
                  className='border rounded w-full p-2'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='no_telepon'
                >
                  Nomor Telepon
                </label>
                <input
                  type='text'
                  id='no_telepon'
                  name='no_telepon'
                  value={formData.no_telepon}
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

export default AdminPelatih;
