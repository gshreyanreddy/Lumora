import {Route ,Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Landing from '../Landing/Landing';


const AppRouter = () => {
  return (
    <Routes>
        <Route element={<MainLayout />} />
            <Route path='/' element={<Landing />} />
    
    </Routes>
  );
}
export default AppRouter;