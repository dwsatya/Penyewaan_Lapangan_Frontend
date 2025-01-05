import NavBar from '../component/NavBar';
import { useState } from 'react';

const ProfilePages = () => {
  // State untuk data pengguna
  const [formData, setFormData] = useState({
    username: 'user123',
    email: 'user@example.com',
    password: '********',
    phone: '08123456789', 
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menyimpan perubahan
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Data tersimpan:', formData);
    // Di sini, Anda dapat mengirim data ke backend menggunakan fetch/axios
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Container dengan background gradient */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green1 via-green2 to-green3 relative">
        {/* Overlay dengan transparansi opsional */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Form di atas background */}
        <div className="relative z-20 w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center text-mainblue">Profil Pengguna</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Nomor Telepon
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>

            <div className="flex justify-end gap-4">
              {!isEditing ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
                >
                  Edit Profil
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
                  >
                    Simpan
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;
