import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import UserPages from './pages/UserPages';
import PelatihPages from './pages/PelatihPages';
import LapanganPages from './pages/LapanganPages';
import LandingPages from './pages/LandingPages';
import Singin from './pages/Signin';
import ProtectedRoute from './component/ProtectedRoute';
import ProfilePages from './pages/ProfilePages';
import AdminLapangan from './pages/AdminLapangan';
import AdminPelatih from './pages/AdminPelatih';

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
          path='/profile'
          element={
            <ProtectedRoute element={<ProfilePages />} requiredRole='user' />
          }
        />

        <Route
          path='/lapangan'
          element={
            <ProtectedRoute element={<LapanganPages />} requiredRole='user' />
          }
        />
        <Route
          path='/admin'
          element={
            <ProtectedRoute element={<AdminDashboard />} requiredRole='admin' />
          }
        />
        <Route
          path='/admin/lapangan'
          element={
            <ProtectedRoute element={<AdminLapangan />} requiredRole='admin' />
          }
        />
        <Route
          path='/admin/pelatih'
          element={
            <ProtectedRoute element={<AdminPelatih />} requiredRole='admin' />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
