import '../../Global.css'
import Navbar from '../../components/Navbar'
import Menu from '../../components/menu'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import Bukamenu from '../../components/bukamenu'


export default function GodOfWar() {
    return (
        <>
            <Navbar />
            <Menu />
            <Ps2Pagetitle
                judul='God Of War'
                descJudul='God Of War'
                descSerial='SCUS-97399'
                descCRC='D6385328'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='D6385328.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/D6385328.pnach" />
            <SourceCode />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4118-title-god+of+war.html" namaSumberKode="1. CodeTwink" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103831" namaSumberKode="2. GameHacking" />
            <Ps2PageDownloadLink
                namaFile="D6385328.pnach"
                dateFile="27 Agustus 2023"
                sizeFile="2,17 KB"
            />
            <Bukamenu />
        </>
    )
}
