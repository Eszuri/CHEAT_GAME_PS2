import './Global.css'
import { Routes, Route } from "react-router-dom";
import FailedUrl from './components/FailedUrl';
import Home from './home';
import Report from './components/report';
import MortalKombatShaolinMonk from './list-cheat/M/MortalKombatSM';
import DefJamForNy from './list-cheat/D/DefJamForNy';
import DigimonRumbleArena2 from './list-cheat/D/DigimonRumbleArena2';
import GodHand from './list-cheat/G/GodHand';
import GodOfWar from './list-cheat/G/GodOfWar';
import GodOfWar2 from './list-cheat/G/GodOfWar2';

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
        <Route path="/godofwar2" element={<GodOfWar2 />} />
        {/* 404 Not Found */}
        <Route path="*" element={<FailedUrl />} />
      </Routes>
    </>
  )
}

export default App