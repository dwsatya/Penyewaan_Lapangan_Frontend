import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../component/NavBar";

const FetchUser = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:8000/users", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                console.log(response.data)
                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching lapangan data:", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <>
            <NavBar />
            <div className="shadow-xl border rounded-lg border-gray-200 text-center my-5 mx-10">
                <h1 className="text-4xl font-bold p-4">Data User</h1>
            </div>

            <div>
                <table className="border-2 w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nama Pengguna</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Nomor Telepon</th>
                        </tr>
                    </thead>
                    <tbody>


                        {user && user.length > 0 ? (
                            user.map((data) => (
                                <tr key={data.id}>
                                    <td className="border px-4 py-2">{data.username}</td>
                                    <td className="border px-4 py-2">{data.email}</td>
                                    <td className="border px-4 py-2">{data.no_telepon}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-2">
                                    Data User kosong . . .
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FetchUser;