import '../../Global.css'
import Navbar from '../../components/Navbar'
import Menu from '../../components/menu'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import Bukamenu from '../../components/bukamenu'


export default function RumbleRacing() {
    return (
        <>
            <Navbar />
            <Menu />
            <Ps2Pagetitle
                judul='Rumble Racing'
                descJudul='Rumble Racing'
                descSerial='SLUS-20174'
                descCRC='2F5354BE'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='2F5354BE.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/2F5354BE.pnach" />
            <SourceCode />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/104814" namaSumberKode="1. GameHacking" />
            <Ps2PageDownloadLink
                namaFile="2F5354BE.pnach"
                dateFile="12 September 2023"
                sizeFile="2,16 KB"
            />
            <Bukamenu />
        </>
    )
}
