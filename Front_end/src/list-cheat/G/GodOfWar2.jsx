
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/Form"


export default function GodOfWar2() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='God Of War II'
                descJudul='God Of War II'
                descSerial='SCUS-97481'
                descCRC='2F123FD8'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='2F123FD8.pnach' />
            <BoilerplateRawPNACH urlFile="/2F123FD8.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4452-title-god+of+war+ii.html" namaSumberKode="1. CodeTwink" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103833" namaSumberKode="2. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41805/God_of_War_II.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="2F123FD8.pnach" />
            <PrevOrHome />
        </>
    )
}
