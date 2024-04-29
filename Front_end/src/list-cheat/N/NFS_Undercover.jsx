import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/Form"

export default function NFS_Undercover() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Need for Speed - Undercover'
                descJudul='Need for Speed - Undercover'
                descSerial='SLUS-21801'
                descCRC='7029F4DB'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='7029F4DB.pnach' />
            <BoilerplateRawPNACH urlFile="/7029F4DB.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamefaqs.gamespot.com/boards/948962-need-for-speed-undercover/46703644" namaSumberKode="1. GameFAQs" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41901/Need_for_Speed_-_Undercover.php" namaSumberKode="1. CoolROM" />
            <Ps2PageDownloadLink namaFile="7029F4DB.pnach" />
            <PrevOrHome />
        </>
    )
}