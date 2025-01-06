import NavBar from '../component/NavBar';

const AdminDashboard = () => {
  return (
    <div className='relative'>
      {/* Navbar */}
      <div className='relative z-20'>
        <NavBar />
      </div>

      {/* Dashboard Container */}
      <div className='h-screen flex items-center justify-center bg-gradient-to-br from-mainblue via-blue-500 to-blue-400 relative'>
        {/* Overlay dengan transparansi opsional */}
        <div className='absolute inset-0 bg-black opacity-30'></div>

        {/* Dashboard Content */}
        <div className='relative z-20 w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-lg'>
          <h1 className='text-3xl font-semibold mb-6 text-center text-mainblue'>
            Dashboard Admin
          </h1>

          {/* Section for Managing Lapangan */}
          <div className='bg-white p-4 rounded-lg shadow-md mb-6'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              Pengelolaan Lapangan
            </h2>
            <p className='text-gray-600 mt-2'>
              Kelola data lapangan, termasuk menambah, mengedit, dan menghapus
              lapangan.
            </p>
            <button className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition'>
              <a href='/admin/lapangan'>Kelola Lapangan</a>
            </button>
          </div>

          {/* Section for Managing Pelatih */}
          <div className='bg-white p-4 rounded-lg shadow-md mb-6'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              Pengelolaan Pelatih
            </h2>
            <p className='text-gray-600 mt-2'>
              Kelola data pelatih, termasuk menambah, mengedit, dan menghapus
              pelatih.
            </p>
            <button className='mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition'>
              <a href='/admin/pelatih'>Kelola Pelatih</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
