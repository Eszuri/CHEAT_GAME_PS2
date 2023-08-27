import './Global.css'
import { Routes, Route } from "react-router-dom";
import MortalKombatShaolinMonk from './list-cheat/MortalKombatSM';
import DefJamForNy from './list-cheat/DefJamForNy';
import FailedUrl from './components/FailedUrl';
import Home from './home';
import Report from './components/report';
import DigimonRumbleArena2 from './list-cheat/DigimonRumbleArena2';
import GodHand from './list-cheat/GodHand';
import GodOfWar from './list-cheat/GodOfWar';

function App() {
  document.body.style.backgroundColor = "#202c33";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/mksm" element={<MortalKombatShaolinMonk />} />
        <Route path="/defjam" element={<DefJamForNy />} />
        <Route path="/digruma2" element={<DigimonRumbleArena2 />} />
        <Route path="/godhand" element={<GodHand />} />
        <Route path="/godofwar" element={<GodOfWar />} />
        {/* 404 Not Found */}
        <Route path="*" element={<FailedUrl />} />
      </Routes>
    </>
  )
}

export default App