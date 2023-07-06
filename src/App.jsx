import './Global.css'
import { Routes, Route } from "react-router-dom";
import MortalKombatShaolinMonk from './list-cheat/MortalKombatSM';
import DefJamForNy from './list-cheat/DefJamForNy';
import FailedUrl from './components/FailedUrl';
import Home from './home';
import Report from './components/report';
function App() {
  document.body.style.backgroundColor = "#202c33";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/mksm" element={<MortalKombatShaolinMonk />} />
        <Route path="/defjam" element={<DefJamForNy />} />
        {/* 404 Not Found */}
        <Route path="*" element={<FailedUrl />} />
        <Route path='/sitemap.xml' element="/sitemap.xml" />
      </Routes>
    </>
  )
}

export default App