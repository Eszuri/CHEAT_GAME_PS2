import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function TheWarriors() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='The Warriors'
                descJudul='Warriors, The'
                descSerial='SLUS-21215'
                descCRC='B99A75DE'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='B99A75DE.pnach' />
            <BoilerplateRawPNACH urlFile="/B99A75DE.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/105293" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/71028/Warriors,_The.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="B99A75DE.pnach" />
            <PrevOrHome />
        </>
    )
}
