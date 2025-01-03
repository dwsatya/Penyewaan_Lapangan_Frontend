import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPages from './pages/UserPages';
import PelatihPages from './pages/PelatihPages';
import LapanganPages from './pages/LapanganPages';
import LandingPages from './pages/LandingPages';
import Singin from './pages/Signin';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path='/' element={<LandingPages />} />
        <Route path='/signin' element={<Singin />} />
        <Route path='/users' element={<UserPages />} />
        <Route path='/pelatih' element={<PelatihPages />} />

        <Route
          path='/lapangan'
          element={
            <ProtectedRoute element={<LapanganPages />} requiredRole='user' />
          }
        />
        {/* <Route path='/lapangan' element={<LapanganPages />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
