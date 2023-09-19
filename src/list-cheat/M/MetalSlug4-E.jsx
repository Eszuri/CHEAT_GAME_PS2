import '../../Global.css'
import Navbar from '../../components/Navbar'
import Menu from '../../components/menu'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import Bukamenu from '../../components/bukamenu'

export default function MetalSlug4Disc1() {
    return (
        <>
            <Navbar />
            <Menu />
            <Ps2Pagetitle
                judul='Metal Slug 4'
                descJudul='Metal Slug 4 & 5 [Disc 1]'
                descSerial='SLUS-20971'
                descCRC='D62C4CD0'
                descRegion='NTSC-U' />
            <Ps2PageStepUsage namaFile='D62C4CD0.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/D62C4CD0.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/104252" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/70886/Metal_Slug_4_&_5_(Disc_1)_(Metal_Slug_4).php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink
                namaFile="D62C4CD0.pnach"
                dateFile="2023"
                sizeFile="1,52 KB"
            />
            <Bukamenu />
        </>
    )
}