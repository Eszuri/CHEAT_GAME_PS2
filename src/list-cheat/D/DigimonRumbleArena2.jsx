import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function DigimonRumbleArena2() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Digimon Rumble Arena 2'
                descJudul='Digimon Rumble Arena 2'
                descSerial='SLUS-21067'
                descCRC='568A5C78'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='568A5C78.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/568A5C78.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103510" namaSumberKode="1. GameHacking" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4027-title-digimon+rumble+arena+2.html" namaSumberKode="1. CodeTwink" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/42026/Digimon_Rumble_Arena_2.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="568A5C78.pnach" />
            <PrevOrHome />
        </>
    )
}
