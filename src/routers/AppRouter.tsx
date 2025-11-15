import {Route ,Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Landing from '../components/Landing/Landing';
import About from '../components/Landing/About';
import Features from '../components/Landing/Features';
import Why from '../components/Landing/Why';
import How from '../components/Landing/How';

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<MainLayout />} >
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/features' element={<Features />} />
            <Route path='/why' element={<Why />} />
            <Route path='/how' element={<How />} />

        </Route>
    </Routes>
  );
}
export default AppRouter;