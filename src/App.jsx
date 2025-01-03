import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPages from "./pages/UserPages";
import PelatihPages from "./pages/PelatihPages";
import LapanganPages from "./pages/LapanganPages";
import LandingPages from "./pages/LandingPages";

const App = () => {
    return (
        <BrowserRouter
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <Routes>
                <Route path="/" element={<LandingPages />} />
                <Route path="/users" element={<UserPages />} />
                <Route path="/pelatih" element={<PelatihPages />} />
                <Route path="/lapangan" element={<LapanganPages />} />
            </Routes>
        </BrowserRouter>
    );
};



export default App;
