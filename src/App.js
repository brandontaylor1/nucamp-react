import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';  
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites())
    dispatch(fetchPartners())
    dispatch(fetchPromotions())
  }, [dispatch])

  return (
    <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />    
            <Route path='/contact' element={<ContactPage />} />    
            <Route path='/directory' element={<CampsitesDirectoryPage />}/>    
            <Route path='/directory/:campsiteId' element={<CampsiteDetailPage />}/>
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
        <Footer />
    </div>
  );
}
export default App;