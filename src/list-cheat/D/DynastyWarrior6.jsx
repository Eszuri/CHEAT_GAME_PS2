
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function DynastyWarrior6() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Dynasty Warriors 6'
                descJudul='Dynasty Warriors 6'
                descSerial='SLUS-21774'
                descCRC='047571F1'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='047571F1.pnach' />
            <BoilerplateRawPNACH urlFile="/047571F1.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="/dynasty-warriors-6" namaSumberKode="1. Eszuri (saya sendiri)" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41821/Dynasty_Warriors_6.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="047571F1.pnach" />
            <PrevOrHome />
        </>
    )
}