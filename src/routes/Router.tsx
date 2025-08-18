import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/pages/login/Login.tsx';
import Home from '@/pages/home/Home.tsx';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Router;
