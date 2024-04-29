
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode from '../../components/PS2-PAGE-CONTROLLER-CODE'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { TextCarapakaikodedengancontoller } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { TextCaraPakai } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH } from '../../components/PS2-PAGE-CODE-PNACH'
import { SourceCode, LinkSourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import { PrevOrHome } from "../../components/Form"
function DefJamForNy() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Def Jam - Fight for NY'
                descJudul='Def Jam - Fight for NY'
                descSerial='SLUS-21004'
                descCRC='4538436F'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='4538436F.pnach' />
            <div className='mt-32' >
                <TextCarapakaikodedengancontoller />
                <TextH1 H1="Mendapatkan 100 Point" />
                <Ps2PageControllerCode kode="GETSTUFF :" Titlekode="MENDAPAT 100 POINT" />
                <Ps2PageControllerCode kode="DUCKETS :" Titlekode="MENDAPAT 100 POINT" />
                <Ps2PageControllerCode kode="CROOKLYN :" Titlekode="MENDAPAT 100 POINT" />
                <Ps2PageControllerCode kode="THESOURCE :" Titlekode="MENDAPAT 100 POINT" />
                <Ps2PageControllerCode kode="NEWJACK :" Titlekode="MENDAPAT 100 POINT" />
                <TextH1 H1="Membuka Martial Art" />
                <Ps2PageControllerCode kode="Capoeira :            " Titlekode=" Martial Arts + Martial Arts + Kickboxing" />
                <Ps2PageControllerCode kode="Cruiserweight Style :" Titlekode="  Submission + Kickboxing + Wrestling" />
                <Ps2PageControllerCode kode="Drunken Kung Fu 1 :" Titlekode=" Martial Arts + Wrestling + Streetfighting" />
                <Ps2PageControllerCode kode="Drunken Kung-Fu 1 :" Titlekode=" Martial Arts + Streetfighting + Wrestling" />
                <Ps2PageControllerCode kode="Jeet Kune Do 1 :" Titlekode=" Martial Arts + Wrestling + Submission" />
                <Ps2PageControllerCode kode="Kung Fu 1 :" Titlekode=" Martial Arts + Submission + Kickboxing" />
                <Ps2PageControllerCode kode="Muay Thai Kixkboxing: " Titlekode="Kickboxing + Streetfighting + Wrestling" />
                <Ps2PageControllerCode kode="Street Brawl : " Titlekode="  Martial Arts + Kickboxing + Wrestling" />
                <Ps2PageControllerCode kode="Street Brawl 1:  " Titlekode="Martial Arts + Kickboxing + Streetfighting" />
                <Ps2PageControllerCode kode="Street Brawl 1:  " Titlekode="Martial Arts + Streetfighting + Kickboxing" />
                <Ps2PageControllerCode kode="Street Brawl 2:  " Titlekode="Martial Arts + Wrestling + Kickboxing" />
                <Ps2PageControllerCode kode="Street Brawl 3:  " Titlekode="Martial Arts + Streetfighting" />
                <Ps2PageControllerCode kode="Street Brawl 4:  " Titlekode="Martial Arts + Kickboxing" />
                <Ps2PageControllerCode kode="Technical Freak : " Titlekode=" Martial Arts + Submission" />
                <TextH1 H1="Cheat Tambahan" />
                <Ps2PageControllerCode kode="STY572939 : " Titlekode="Menyelesaikan Story Mode" />
                <Ps2PageControllerCode kode="EMM512723 : " Titlekode="Mengaktifkan Eminem" />
                <Ps2PageControllerCode kode="SUS138658 : " Titlekode="Machino Cap dalam SUS" />
                <Ps2PageControllerCode kode="SUS138654 : " Titlekode="Machino Cap 2 dalam SUS" />
                <Ps2PageControllerCode kode="SUS138652 : " Titlekode="Machino Cap 3 (checkerd) dalam SUS" />
                <Ps2PageControllerCode kode="HVU494656 : " Titlekode="Membuka Stage/Tempat (DMX)" />
                <Ps2PageControllerCode kode="HVU494652 : " Titlekode="Membuka Stage/Tempat (Oldschool)" />
                <TextH1 H1="Cara Pakai Kode" />
                <TextCaraPakai usage="1. Masuk Game dan klik 'Start'" />
                <TextCaraPakai usage="2. Ada 9 pilihan kalian pilih 'Extras'" />
                <TextCaraPakai usage="3. lalu Klik 'Cheat'" />
                <TextCaraPakai usage="4. Masukan kode diatas " />
            </div>
            <BoilerplateRawPNACH urlFile="/4538436F.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/103490" namaSumberKode="1. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41688/Def_Jam_-_Fight_for_NY.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="4538436F.pnach" />
            <PrevOrHome />
        </>
    )
}

export default DefJamForNy
