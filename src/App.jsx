import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { landingpage } from './pages/landingpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { map } from './pages/map';
import BantuDataBaru from './components/BantuDataBaru';
import './css/landingpage.css'
import './css/map.css'
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import UnderConstruction from './pages/UnderConstruction';

const LandingPage = () => (
  <iframe
    src="/landingpage/index.html"
    style={{ width: "100%", height: "100vh", border: "none", overflow: "auto" }}
    title="Static HTML Page"
  ></iframe>
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='tentang-kami' Component={AboutUs}/>
          <Route path='/tropitour-map' Component={map}/>
          <Route path='/kontak' Component={ContactUs}/>
          <Route path="/bantu-data-baru" element={<BantuDataBaru />} />
          <Route path="/construction" Component={UnderConstruction}/>
          {/* <Route path='/pantai-setumu' Component={''}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
