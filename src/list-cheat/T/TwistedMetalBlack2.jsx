import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function TwistedMetalBlack2() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Twisted Metal - Black'
                descJudul='Twisted Metal - Black'
                descSerial='SCUS-97101'
                descCRC='073696DA'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='073696DA.pnachh' />
            <BoilerplateRawPNACH urlFile="/073696DA.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/105237" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://www.romsgames.net/download/playstation-2-rom-twisted-metal-black/" namaSumberKode="1. ROMs GAMES" />
            <Ps2PageDownloadLink namaFile="073696DA.pnach" />
            <PrevOrHome />
        </>
    )
}
