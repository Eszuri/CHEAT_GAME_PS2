
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/Form"


export default function GodOfWar() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='God Of War'
                descJudul='God Of War'
                descSerial='SCUS-97399'
                descCRC='D6385328'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='D6385328.pnach' />
            <BoilerplateRawPNACH urlFile="/D6385328.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://codetwink.com/view-cheats-4118-title-god+of+war.html" namaSumberKode="1. CodeTwink" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103831" namaSumberKode="2. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41795/God_of_War.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="D6385328.pnach" />
            <PrevOrHome />
        </>
    )
}
