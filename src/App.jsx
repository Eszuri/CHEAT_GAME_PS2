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
import RumbleRacing from './list-cheat/R/RumbleRacing';
import GhostRider from './list-cheat/G/GhostRider';
import MetalSlug3EU from './list-cheat/M/MetalSlug3-E';
import MetalSlug4Disc1 from './list-cheat/M/MetalSlug4-E';
import MetalSlug5Disc2 from './list-cheat/M/MetalSlug5-E';
import List from './list-cheat/List';
import List_A from './list-cheat/A/LIST_A';
import List_B from './list-cheat/B/LIST_B';
import List_C from './list-cheat/C/LIST_C';
import List_D from './list-cheat/D/LIST_D';
import List_E from './list-cheat/E/LIST_E';
import List_F from './list-cheat/F/LIST_F';
import List_G from './list-cheat/G/LIST_G';
import List_H from './list-cheat/H/LIST_H';
import List_I from './list-cheat/I/LIST_I';
import List_J from './list-cheat/J/LIST_J';
import List_K from './list-cheat/K/LIST_K';
import List_L from './list-cheat/L/LIST_L';
import List_M from './list-cheat/M/LIST_M';
import List_N from './list-cheat/N/LIST_N';
import List_O from './list-cheat/O/LIST_O';
import List_P from './list-cheat/P/LIST_P';
import List_Q from './list-cheat/Q/LIST_Q';
import List_R from './list-cheat/R/LIST_R';
import List_S from './list-cheat/S/LIST_S';
import List_T from './list-cheat/T/LIST_T';
import List_U from './list-cheat/U/LIST_U';
import List_V from './list-cheat/V/LIST_V';
import List_W from './list-cheat/W/LIST_W';
import List_X from './list-cheat/X/LIST_X';
import List_Y from './list-cheat/Y/LIST_Y';
import List_Z from './list-cheat/Z/LIST_Z';
import Changelog from './components/Changelog';
import MetalSlugAnthology from './list-cheat/M/MetalSlugAnthology';
import TheWarriors from './list-cheat/W/TheWarriors';
import Tekken4 from './list-cheat/T/Tekken4';
import DefJamForNyEU from './list-cheat/D/DefJamForNyEU';

function App() {
  document.body.style.backgroundColor = "#202c33";
  return (
    <>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/report" element={<Report placeholder="Ketikkan laporan anda disini" tittle="Laporkan" />} />
        <Route path="/request" element={<Report placeholder="Ketikkan request anda disini" tittle="Request" />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="*" element={<FailedUrl />} />

        {/* list A */}
        <Route path="/list/a" element={<List_A />} />

        {/* list B */}
        <Route path="/list/b" element={<List_B />} />

        {/* list C */}
        <Route path="/list/c" element={<List_C />} />

        {/* list D */}
        <Route path="/list/d" element={<List_D />} />
        <Route path="/defjam" element={<DefJamForNy />} />
        <Route path="/defjam-eu" element={<DefJamForNyEU />} />
        <Route path="/digruma2" element={<DigimonRumbleArena2 />} />

        {/* list E */}
        <Route path="/list/e" element={<List_E />} />

        {/* list F */}
        <Route path="/list/f" element={<List_F />} />

        {/* list G */}
        <Route path="/list/g" element={<List_G />} />
        <Route path="/ghostrider" element={<GhostRider />} />
        <Route path="/godhand" element={<GodHand />} />
        <Route path="/godofwar" element={<GodOfWar />} />
        <Route path="/godofwar2" element={<GodOfWar2 />} />

        {/* list H */}
        <Route path="/list/h" element={<List_H />} />

        {/* list I */}
        <Route path="/list/i" element={<List_I />} />

        {/* list J */}
        <Route path="/list/j" element={<List_J />} />

        {/* list K */}
        <Route path="/list/k" element={<List_K />} />

        {/* list L */}
        <Route path="/list/l" element={<List_L />} />

        {/* list M */}
        <Route path="/list/m" element={<List_M />} />
        <Route path="/metalslug3" element={<MetalSlug3EU />} />
        <Route path="/metalslug4" element={<MetalSlug4Disc1 />} />
        <Route path="/metalslug5" element={<MetalSlug5Disc2 />} />
        <Route path="/metalslug-anthology" element={<MetalSlugAnthology />} />
        <Route path="/mksm" element={<MortalKombatShaolinMonk />} />

        {/* list N */}
        <Route path="/list/n" element={<List_N />} />

        {/* list O */}
        <Route path="/list/o" element={<List_O />} />

        {/* list P */}
        <Route path="/list/p" element={<List_P />} />

        {/* list Q */}
        <Route path="/list/q" element={<List_Q />} />

        {/* list R */}
        <Route path="/list/r" element={<List_R />} />
        <Route path="/rumbleracing" element={<RumbleRacing />} />

        {/* list S */}
        <Route path="/list/s" element={<List_S />} />

        {/* list T */}
        <Route path="/list/t" element={<List_T />} />
        <Route path="/tekken4" element={<Tekken4 />} />

        {/* list U */}
        <Route path="/list/u" element={<List_U />} />

        {/* list V */}
        <Route path="/list/v" element={<List_V />} />

        {/* list W */}
        <Route path="/list/w" element={<List_W />} />
        <Route path="/thewarriors" element={<TheWarriors />} />

        {/* list X */}
        <Route path="/list/x" element={<List_X />} />

        {/* list Y */}
        <Route path="/list/y" element={<List_Y />} />

        {/* list Z */}
        <Route path="/list/z" element={<List_Z />} />
      </Routes>
    </>
  )
}

export default App