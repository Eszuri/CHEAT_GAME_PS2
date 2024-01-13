
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function DownhillDomination() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Downhill Domination'
                descJudul='Downhill Domination'
                descSerial='SCUS-97177'
                descCRC='5AE01D98'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='5AE01D98.pnach' />
            <BoilerplateRawPNACH urlFile="/5AE01D98.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103566" namaSumberKode="1. GameHacking" />
            <LinkSourceCode urlSumberKode="/downhill-domination" namaSumberKode="2. Eszuri (saya sendiri)" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41557/Downhill_Domination.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="5AE01D98.pnach" />
            <PrevOrHome />
        </>
    )
}
