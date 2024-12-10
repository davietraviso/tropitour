import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { landingpage } from './pages/landingpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { map } from './pages/map';
import BantuDataBaru from './components/BantuDataBaru';
import './css/landingpage.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={landingpage}/>
          <Route path='/tropitour-map' Component={map}/>
         <Route path="/bantu-data-baru" element={<BantuDataBaru />} />
          {/* <Route path='/pantai-setumu' Component={''}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
