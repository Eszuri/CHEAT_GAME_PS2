
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/Form"

export default function Tekken4() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Tekken 4'
                descJudul='Tekken 4'
                descSerial='SLUS-20328'
                descCRC='833FE0A4'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='833FE0A4.pnach' />
            <BoilerplateRawPNACH urlFile="/833FE0A4.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/105135" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://www.romsgames.net/playstation-2-rom-tekken-4/" namaSumberKode="1. ROMs Games" />
            <Ps2PageDownloadLink namaFile="833FE0A4.pnach" />
            <PrevOrHome />
        </>
    )
}
