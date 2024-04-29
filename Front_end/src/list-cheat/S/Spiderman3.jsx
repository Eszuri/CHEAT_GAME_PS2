import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/Form"

export default function Spiderman3() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Spiderman 3'
                descJudul='Spiderman 3'
                descSerial='SLUS-21552'
                descCRC='29873A0C'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='29873A0C.pnach' />
            <BoilerplateRawPNACH urlFile="/29873A0C.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4461-title-spider-man+3.html" namaSumberKode="1. CodeTwink" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41856/Spider-Man_3.php" namaSumberKode="1. CoolROM" />
            <Ps2PageDownloadLink namaFile="29873A0C.pnach" />
            <PrevOrHome />
        </>
    )
}
