import NavBar from "../component/NavBar";
const LandingPages = () => {
    return (
        <div>
            <NavBar />
            <div className="pt-20">
                <img src="/src/assets/landingpages.png" alt="" className="w-full h-auto" />
            </div>
            <div>
                <div className="flex flex-row items-center justify-between mx-20 h-20 text-xl">
                    <h2 className="font-semibold">
                        Rekomendasi <span className="text-mainblue">Lapangan</span>
                    </h2>
                    <button className="hover:text-mainblue hover:underline text-base"> 
                        <a href="/lapangan">Lihat Semua</a>
                    </button>
                </div>

                <div className="flex mx-20 gap-10">
                    <div className="max-w-xs rounded-xl shadow-lg overflow-hidden bg-bla hover:shadow-2xl transition-shadow duration-300" >
                        <div className="flex flex-col">
                            <div className="overflow-hidden">
                                <img src="src/assets/lapangan1.png" alt="Lapangan Ahmad Yani" className="w-full h-auto object-cover"/>
                            </div>
                            <div className="px-5 py-2">
                                <h2 className="text-xl font-semibold">Ahmad Yani Hall</h2>
                                <h3 className="text-xs text-gray-600">Jl. A. Yani, No. 3, Singaraja, Buleleng</h3>
                                <h4 className="pt-4 pb-2 text-md font-semibold">Rp100.000,00<span className="text-gray-600 font-medium text-xs">/1 jam</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-xl shadow-lg overflow-hidden bg-bla hover:shadow-2xl transition-shadow duration-300" >
                        <div className="flex flex-col">
                            <div className="overflow-hidden">
                                <img src="src/assets/lapangan1.png" alt="Lapangan Ahmad Yani" className="w-full h-auto object-cover"/>
                            </div>
                            <div className="px-5 py-2">
                                <h2 className="text-xl font-semibold">Ahmad Yani Hall</h2>
                                <h3 className="text-xs text-gray-600">Jl. A. Yani, No. 3, Singaraja, Buleleng</h3>
                                <h4 className="pt-4 pb-2 text-md font-semibold">Rp100.000,00<span className="text-gray-600 font-medium text-xs">/1 jam</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-xl shadow-lg overflow-hidden bg-bla hover:shadow-2xl transition-shadow duration-300" >
                        <div className="flex flex-col">
                            <div className="overflow-hidden">
                                <img src="src/assets/lapangan1.png" alt="Lapangan Ahmad Yani" className="w-full h-auto object-cover"/>
                            </div>
                            <div className="px-5 py-2">
                                <h2 className="text-xl font-semibold">Ahmad Yani Hall</h2>
                                <h3 className="text-xs text-gray-600">Jl. A. Yani, No. 3, Singaraja, Buleleng</h3>
                                <h4 className="pt-4 pb-2 text-md font-semibold">Rp100.000,00<span className="text-gray-600 font-medium text-xs">/1 jam</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-xl shadow-lg overflow-hidden bg-bla hover:shadow-2xl transition-shadow duration-300" >
                        <div className="flex flex-col">
                            <div className="overflow-hidden">
                                <img src="src/assets/lapangan1.png" alt="Lapangan Ahmad Yani" className="w-full h-auto object-cover"/>
                            </div>
                            <div className="px-5 py-2">
                                <h2 className="text-xl font-semibold">Ahmad Yani Hall</h2>
                                <h3 className="text-xs text-gray-600">Jl. A. Yani, No. 3, Singaraja, Buleleng</h3>
                                <h4 className="pt-4 pb-2 text-md font-semibold">Rp100.000,00<span className="text-gray-600 font-medium text-xs">/1 jam</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-xl shadow-lg overflow-hidden bg-bla hover:shadow-2xl transition-shadow duration-300" >
                        <div className="flex flex-col">
                            <div className="overflow-hidden">
                                <img src="src/assets/lapangan1.png" alt="Lapangan Ahmad Yani" className="w-full h-auto object-cover"/>
                            </div>
                            <div className="px-5 py-2">
                                <h2 className="text-xl font-semibold">Ahmad Yani Hall</h2>
                                <h3 className="text-xs text-gray-600">Jl. A. Yani, No. 3, Singaraja, Buleleng</h3>
                                <h4 className="pt-4 pb-2 text-md font-semibold">Rp100.000,00<span className="text-gray-600 font-medium text-xs">/1 jam</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <div className="flex flex-row items-center justify-between mx-20 h-20 text-xl">
                    <h2 className="font-semibold">Rekomendasi <span className="text-mainblue">Pelatih</span></h2>
                    <button className="hover:text-mainblue hover:underline text-base"> 
                        <a href="/pelatih">Lihat Semua</a>
                    </button>
                </div >
                <div className="max-w-xs rounded-xl shadow-lg overflow-hidden bg-bla hover:shadow-2xl transition-shadow duration-300 mx-20" >
                        <div className="flex flex-col">
                           <div className="overflow-hidden">
                                <img src="src/assets/lapangan1.png" alt="Lapangan Ahmad Yani" className="w-full h-auto object-cover"/>
                                </div>
                            <div className="px-5 py-2">
                                <h2 className="text-xl font-semibold">Dik Jyoti</h2>
                                <h3 className="text-xs text-gray-600">Pelatih Anak Anak</h3>
                                <h4 className="pt-4 pb-2 text-md font-semibold">Rp100.000,00<span className="text-gray-600 font-medium text-xs">/1 jam</span></h4>                                </div>
                        </div>
                </div>
            <div>
                
            </div>

        </div>
    )
}

export default LandingPages;