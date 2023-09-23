import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function MetalSlug3EU() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Metal Slug 3'
                descJudul='Metal Slug 3 (europe)'
                descSerial='SLES-52599'
                descCRC='04924A38'
                descRegion='PAL-M5' />
            <Ps2PageStepUsage namaFile='04924A38.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/04924A38.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/102011" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/70885/Metal_Slug_3_(Europe)_(En,Fr,De,Es,It).php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="04924A38.pnach" />
            <PrevOrHome />
        </>
    )
}