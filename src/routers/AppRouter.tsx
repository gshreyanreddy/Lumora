import {Route ,Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Landing from '../components/Landing/Landing';


const AppRouter = () => {
  return (
    <Routes>
        <Route element={<MainLayout />} >
            <Route path='/' element={<Landing />} />
        </Route>
    </Routes>
  );
}
export default AppRouter;