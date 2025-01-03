import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../component/NavBar";

const FetchPelatih = () => {
    const [pelatih, setPelatih] = useState([]);

    useEffect(() => {
        const fetchPelatih = async () => {
            try {
                const response = await axios.get("http://localhost:8000/pelatih", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                console.log(response.data)
                setPelatih(response.data.data);
            } catch (error) {
                console.error("Error fetching lapangan data:", error);
            }
        };

        fetchPelatih();
    }, []);

    return (
        <>
            <NavBar />
            <div className="shadow-xl border rounded-lg border-gray-200 text-center my-5 mx-10">
                <h1 className="text-4xl font-bold p-4">Data Pelatih</h1>
            </div>

            <div>
                <table className="border-2 w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nama Pelatih</th>
                            <th className="border px-4 py-2">Nomor Telepon</th>
                            <th className="border px-4 py-2">Tarif Perjam</th>
                        </tr>
                    </thead>
                    <tbody>


                        {pelatih && pelatih.length > 0 ? (
                            pelatih.map((data) => (
                                <tr key={data.id}>
                                    <td className="border px-4 py-2">{data.nama_pelatih}</td>
                                    <td className="border px-4 py-2">{data.no_telepon}</td>
                                    <td className="border px-4 py-2">{data.tarif_per_jam}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-2">
                                    Data pelatih kosong . . .
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FetchPelatih;