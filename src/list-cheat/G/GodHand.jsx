import '../../Global.css'
import Navbar from '../../components/Navbar'
import Menu from '../../components/menu'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import Bukamenu from '../../components/bukamenu'


export default function GodHand() {
    return (
        <>
            <Navbar />
            <Menu />
            <Ps2Pagetitle
                judul='God Hand'
                descJudul='God Hand'
                descSerial='SLUS-21503'
                descCRC='6FB69282'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='6FB69282.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="/6FB69282.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4378-title-god+hand.html" namaSumberKode="1. CodeTwink" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41906/God_Hand.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink
                namaFile="6FB69282.pnach"
                dateFile="19 Agustus 2023"
                sizeFile="702 byte / 0.7 KB"
            />
            <Bukamenu />
        </>
    )
}
