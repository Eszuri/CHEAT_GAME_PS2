
import Navbar from '../../components/Navbar'
import { Ps2Pagetitle } from '../../components/PS2-PAGE-TITLE'
import Ps2PageStepUsage from '../../components/PS2-PAGE-STEP-USAGE'
import Ps2PageControllerCode, { TextCaraPakai, TextCarapakaikodedengancontoller, TextH1 } from '../../components/PS2-PAGE-CONTROLLER-CODE'
import { BoilerplateRawPNACH, LinkSourceCode, SourceCode } from '../../components/PS2-PAGE-CODE-PNACH'
import Ps2PageDownloadLink from '../../components/PS2_PAGE_DOWNLOAD_LINK'
import { PrevOrHome } from '../../components/report'

function MortalKombatShaolinMonk() {
    return (
        <>
            <Navbar />
            <Ps2Pagetitle
                judul='Mortal Kombat - Shaolin Monks'
                descJudul='Mortal Kombat - Shaolin Monks'
                descSerial='SLUS-21087'
                descCRC='455DD546'
                descRegion='NTSC - U' />
            <Ps2PageStepUsage namaFile='455DD546.pnach' />
            <div className='mt-32'>
                <TextCarapakaikodedengancontoller />
                <Ps2PageControllerCode Titlekode='1. Membuka Karakter Scorpion: ' kode='Tahan L2, kotak, atas, L1, R1, kiri, kanan, kotak' />
                <Ps2PageControllerCode Titlekode="2. Membuka Karakter Sub-Zero: " kode="Tahan L2, kotak, bawah, atas, L1, L1, atas, kotak" />
                <Ps2PageControllerCode Titlekode="3. Membuka Mode Arcade: " kode="Tahan L2, kotak, atas, bawah, kanan, kiri, R2, kotak" />
                <TextH1 H1="Cara Pakai Kode" />
                <TextCaraPakai usage='1. Masuk ke Game, Klik Start (tetap di loby)' />
                <TextCaraPakai usage='2. masukan kode dengan cara :' />
                <TextCaraPakai usage='3. Tekan lama L2 jangan sampe lepas' />
                <TextCaraPakai usage='4. dan pencet kode diatas (dimulai dari kotak)' />
                <TextCaraPakai usage='5. Sampe bunyi "tung" berarti berhasil' />
            </div>
            <BoilerplateRawPNACH urlFile="/455DD546.pnach" />
            <SourceCode text="Sumber Kode :" />
            <LinkSourceCode urlSumberKode="https://www.facebook.com/groups/603939780725137/posts/675359970249784/" namaSumberKode="1. Facebook" />
            <LinkSourceCode urlSumberKode="http://khanifa7x.blogspot.com/2017/12/kode-raw-mortal-kombat-shaolin-monks.html" namaSumberKode="2. Blogger" />
            <LinkSourceCode urlSumberKode="https://gamehacking.org/game/104317" namaSumberKode="3. GameHacking" />
            <SourceCode text="Sumber Game :" />
            <LinkSourceCode urlSumberKode="https://coolrom.com.au/roms/ps2/41803/Mortal_Kombat_-_Shaolin_Monks.php" namaSumberKode="1. CoolRom" />
            <Ps2PageDownloadLink namaFile="455DD546.pnach" />
            <PrevOrHome />
        </>
    )
}

export default MortalKombatShaolinMonk
