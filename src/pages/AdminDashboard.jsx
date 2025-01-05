import NavBar from '../component/NavBar'; // Pastikan Anda memiliki komponen NavBar
import { useState } from 'react';
import Swal from 'sweetalert2';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [lapangan, setLapangan] = useState([]);
  const [pelatih, setPelatih] = useState([]);

  // Fungsi untuk mengelola data users
  const handleManageUsers = () => {
    Swal.fire({
      icon: 'info',
      title: 'Pengelolaan User',
      text: 'Fitur ini memungkinkan Anda untuk melihat dan mengelola data pengguna.',
    });
  };

  // Fungsi untuk mengelola data lapangan
  const handleManageLapangan = () => {
    Swal.fire({
      icon: 'info',
      title: 'Pengelolaan Lapangan',
      text: 'Fitur ini memungkinkan Anda untuk melihat dan mengelola data lapangan.',
    });
  };

  // Fungsi untuk mengelola data pelatih
  const handleManagePelatih = () => {
    Swal.fire({
      icon: 'info',
      title: 'Pengelolaan Pelatih',
      text: 'Fitur ini memungkinkan Anda untuk melihat dan mengelola data pelatih.',
    });
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Dashboard Container */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-mainblue via-blue-500 to-blue-400 relative">
        {/* Overlay dengan transparansi opsional */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Dashboard Content */}
        <div className="relative z-20 w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center text-mainblue">Dashboard Admin</h1>

          {/* Section for Managing Users */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Pengelolaan User</h2>
            <p className="text-gray-600 mt-2">
              Kelola data pengguna, termasuk melihat dan mengedit profil pengguna.
            </p>
            <button
              onClick={handleManageUsers}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Kelola User
            </button>
          </div>

          {/* Section for Managing Lapangan */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Pengelolaan Lapangan</h2>
            <p className="text-gray-600 mt-2">
              Kelola data lapangan, termasuk menambah, mengedit, dan menghapus lapangan.
            </p>
            <button
              onClick={handleManageLapangan}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Kelola Lapangan
            </button>
          </div>

          {/* Section for Managing Pelatih */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Pengelolaan Pelatih</h2>
            <p className="text-gray-600 mt-2">
              Kelola data pelatih, termasuk menambah, mengedit, dan menghapus pelatih.
            </p>
            <button
              onClick={handleManagePelatih}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            >
              Kelola Pelatih
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;