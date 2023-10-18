import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode from '../../components/PS2-PAGE-CONTROLLER-CODE'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { TextCarapakaikodedengancontoller } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { TextCaraPakai } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH } from '../../components/PS2-PAGE-CODE-PNACH'
import { SourceCode, LinkSourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import { PrevOrHome } from "../../components/report"
function DefJamForNyEU() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Def Jam - Fight for NY'
                descJudul='Def Jam - Fight for NY (Europe)'
                descSerial='SLES-52507'
                descCRC='unknown'
                descRegion='PAL - Unk' />
            <Ps2PageStepUsage namaFile='unknown.pnach' />
            <BoilerplateRawPNACH urlFile="/unknown.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/101117" namaSumberKode="1. GameHacking" />
            <Ps2PageDownloadLink namaFile="unknown.pnach" />
            <PrevOrHome />
        </>
    )
}

export default DefJamForNyEU
