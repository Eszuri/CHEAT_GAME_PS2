import '../../Global.css'
import Navbar from '../../components/Navbar'
import Menu from '../../components/menu'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import Bukamenu from '../../components/bukamenu'


export default function GodOfWar2() {
    return (
        <>
            <Navbar />
            <Menu />
            <Ps2Pagetitle
                judul='God Of War ||'
                descJudul='God Of War ||'
                descSerial='SCUS-97481'
                descCRC='2F123FD8'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='2F123FD8.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/2F123FD8.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4452-title-god+of+war+ii.html" namaSumberKode="1. CodeTwink" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103833" namaSumberKode="2. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41805/God_of_War_II.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink
                namaFile="2F123FD8.pnach"
                dateFile="29 Agustus 2023"
                sizeFile="2,86 KB"
            />
            <Bukamenu />
        </>
    )
}
