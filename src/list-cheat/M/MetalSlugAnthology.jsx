import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function MetalSlugAnthology() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Metal Slug Anthology'
                descJudul='Metal Slug Anthology'
                descSerial='SLUS-21550'
                descCRC='F5625D83'
                descRegion='NTSC-U' />
            <Ps2PageStepUsage namaFile='F5625D83.pnach' />
            <BoilerplateRawPNACH urlFile="/F5625D83.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4813-title-metal+slug+anthology.html" namaSumberKode="1. CodeTwink" />
            <LinkSourceCode urlSumberKode="https://forums.pcsx2.net/Thread-Post-your-PCSX2-cheats-patches-here?page=150" namaSumberKode="1. PCSX2 Forum" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://www.romsgames.net/playstation-2-rom-metal-slug-anthology/" namaSumberKode="1. ROMs Games" />
            <Ps2PageDownloadLink namaFile="F5625D83.pnach" />
            <PrevOrHome />
        </>
    )
}