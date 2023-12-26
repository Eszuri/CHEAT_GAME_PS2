import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function NFS_Underground() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Need for Speed - Underground'
                descJudul='Need for Speed - Underground'
                descSerial='SLUS-20811'
                descCRC='CB99CD12'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='CB99CD12.pnach' />
            <BoilerplateRawPNACH urlFile="/CB99CD12.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/104465" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://cdromance.com/ps2-iso/need-for-speed-underground-usa/" namaSumberKode="1. CDRomance" />
            <Ps2PageDownloadLink namaFile="CB99CD12.pnach" />
            <PrevOrHome />
        </>
    )
}
