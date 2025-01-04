import NavBar from '../component/NavBar';
import { useFetchLapangan } from '../hooks/useFetchLapangan';
import { useFetchPelatih } from '../hooks/useFetchPelatih';

const LandingPages = () => {
  const { lapangan } = useFetchLapangan();
  const { pelatih } = useFetchPelatih();

  console.log(pelatih);

  if (!lapangan || !pelatih) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavBar />

      {/* Images Background */}
      <div className='pt-20'>
        <img src='/assets/landingpages.png' alt='' className='w-full h-auto' />
      </div>

      {/* Rekomendasi Lapangan */}
      <div>
        <div className='flex flex-row items-center justify-between mx-20 h-20 text-xl'>
          <h2 className='font-semibold'>
            Rekomendasi <span className='text-mainblue'>Lapangan</span>
          </h2>
          <a
            className='hover:text-mainblue hover:underline text-base'
            href='/lapangan'
          >
            Lihat Semua
          </a>
        </div>

        <div className='flex mx-20 gap-10 mb-12 flex-wrap'>
          {lapangan.map((data) => (
            <div
              key={data.id}
              className='max-w-xs rounded-xl shadow-lg overflow-hidden bg-gray-100 hover:shadow-2xl transition-shadow duration-300'
            >
              <img
                src='/assets/lapangan1.png'
                alt={data.nama_lapangan}
                className='w-full h-auto object-cover'
              />
              <div className='px-5 py-2'>
                <h2 className='text-xl font-semibold'>{data.nama_lapangan}</h2>
                <h3 className='text-xs text-gray-600'>
                  {data.lokasi_lapangan}
                </h3>
                <h4 className='pt-4 pb-2 text-md font-semibold'>
                  Rp{data.tarif_per_jam}
                  <span className='text-gray-600 font-medium text-xs'>
                    /1 jam
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Rekomendasi Pelatih */}
        <div className='flex flex-row items-center justify-between mx-20 h-20 text-xl'>
          <h2 className='font-semibold'>
            Rekomendasi <span className='text-mainblue'>Pelatih</span>
          </h2>
          <a
            className='hover:text-mainblue hover:underline text-base'
            href='/lapangan'
          >
            Lihat Semua
          </a>
        </div>

        <div className='flex mx-20 gap-10 mb-12 flex-wrap'>
          {pelatih.map((data) => (
            <div
              key={data.id}
              className='max-w-xs rounded-xl shadow-lg overflow-hidden bg-gray-100 hover:shadow-2xl transition-shadow duration-300'
            >
              <img
                src='/assets/lapangan1.png'
                alt={data.nama_pelatih}
                className='w-full h-auto object-cover'
              />
              <div className='px-5 py-2'>
                <h2 className='text-xl font-semibold'>{data.nama_pelatih}</h2>
                <h4 className='pt-4 pb-2 text-md font-semibold'>
                  Rp{data.tarif_per_jam}
                  <span className='text-gray-600 font-medium text-xs'>
                    /1 jam
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPages;
