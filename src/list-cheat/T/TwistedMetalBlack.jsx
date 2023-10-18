import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function TwistedMetalBlack() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Twisted Metal - Black'
                descJudul='Twisted Metal - Black'
                descSerial='????'
                descCRC='????'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='??????.pnach' />
            <BoilerplateRawPNACH urlFile="/Twisted Metal - Black (NTSC-U).pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/105239" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <Ps2PageDownloadLink namaFile="Twisted Metal - Black (NTSC-U).pnach" />
            <PrevOrHome />
        </>
    )
}
