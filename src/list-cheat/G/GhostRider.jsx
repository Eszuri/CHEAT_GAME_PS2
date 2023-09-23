import '../../Global.css'
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/report"

export default function GhostRider() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Ghost Rider'
                descJudul='Ghost Rider'
                descSerial='SLUS-21306'
                descCRC='FA6D7EEA'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='FA6D7EEA.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='Saat ini belom ada ' />
            </div>
            <BoilerplateRawPNACH urlFile="FA6D7EEA.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4444-title-ghost+rider.html" namaSumberKode="1. CodeTwink" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41868/Ghost_Rider.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="FA6D7EEA.pnach" />
            <PrevOrHome />
        </>
    )
}
