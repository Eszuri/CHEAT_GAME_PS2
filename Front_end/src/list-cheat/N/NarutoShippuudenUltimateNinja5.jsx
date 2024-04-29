import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from "../../components/Form"

export default function NarutoShippuudenUltimateNinja5() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Naruto Shippuuden - Ultimate Ninja 5'
                descJudul='Naruto Shippuuden - Ultimate Ninja 5'
                descSerial='SLES-55605'
                descCRC='C071D4C1'
                descRegion='PAL - M' />
            <Ps2PageStepUsage namaFile='C071D4C1.pnach' />
            <BoilerplateRawPNACH urlFile="/C071D4C1.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/?game=111059&hacker=Lajos+Szalay&format=cb1" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41793/Naruto_Shippuden_-_Ultimate_Ninja_5.php" namaSumberKode="1. CoolROM" />
            <Ps2PageDownloadLink namaFile="C071D4C1.pnach" />
            <PrevOrHome />
        </>
    )
}