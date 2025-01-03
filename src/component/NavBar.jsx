const NavBar = ()=>{
    return (
        <div className=" flex flex-row items-center justify-between px-20 h-20 fixed top-0 left-0 right-0 bg-white">
            <div>
                <h1 className="font-Salsa text-mainblue text-3xl">ShuttleBook.</h1>
            </div>
            <div className="flex items-center gap-5 text-xl">
                <div className="border-r-2 border-gray-400 pr-5">
                    <ul className="flex flex-row gap-5 text-gray-600 ">
                        <li>
                            <a href="/" className="hover:text-mainblue hover:underline ">Beranda</a>
                        </li>
                        <a href="/lapangan" className="hover:text-mainblue hover:underline">
                            <li>Sewa Lapangan</li>
                        </a>
                        <li>
                            <a href="/pelatih" className="hover:text-mainblue hover:underline">Pelatih</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <button className="text-gray-600 hover:underline hover:text-mainblue">Daftar</button>
                    <button className="bg-gray-600 hover:bg-mainblue transition duration-300 ease-in-out text-white p-2 rounded-xl">Masuk</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;