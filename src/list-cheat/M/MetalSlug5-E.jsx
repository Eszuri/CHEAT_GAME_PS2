import '../../Global.css'
import Navbar from '../../components/Navbar'
import Menu from '../../components/menu'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import Bukamenu from '../../components/bukamenu'

export default function MetalSlug5Disc2() {
    return (
        <>
            <Navbar />
            <Menu />
            <Ps2Pagetitle
                judul='Metal Slug 5'
                descJudul='Metal Slug 4 & 5 [Disc 2]'
                descSerial='SLUS-20990'
                descCRC='D4E1581B'
                descRegion='NTSC-U' />
            <Ps2PageStepUsage namaFile='D4E1581B.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/D4E1581B.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/104253" namaSumberKode="1. GameHacking" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4152-title-metal+slug+5.html" namaSumberKode="2. CodeTwink" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.me/roms/ps2/70887/Metal_Slug_4_&_5_(Disc_2)_(Metal_Slug_5).php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink
                namaFile="D4E1581B.pnach"
                dateFile="2023"
                sizeFile="3,10 KB"
            />
            <Bukamenu />
        </>
    )
}