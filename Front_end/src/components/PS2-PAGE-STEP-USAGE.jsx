
import LogoPauseAethersx2 from "../images/logopauseaethersx2.jpeg"
import KodePatchAether from "../images/kodepatchaether.jpeg"
import Save from "../images/save.jpeg"
export default function Ps2PageStepUsage(props) {
    return (
        <> <section className='text-white w-[95%] mr-auto ml-auto'>
            {/* langkah langkah di emulator pc*/}
            <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mt-32'>Cara pakai dengan file .pnach</h1>
            <p className='mt-8 font-medium text-yellow-300'>A. Di Pc dengan dengan emulator PCSX2</p>
            <p className='text-base mt-3'>1. buka folder penginstalan game di file explorer, kalo dipunya gw <span className='text-sm'>"C:\Users\Eszuri\Documents\PCSX2\cheats"</span> difile {props.namaFile}. kalo file gada tinggal download ae dibawah</p>
            <p className='text-base mt-3'>2. buka file {props.namaFile} pake text editor, terserah pake text editor apa aja kalo gw notepad</p>
            <p className='text-base mt-3'>3. salin terus paste kan aja difile {props.namaFile} (untuk kodenya ada di bawah)</p>
            <p className='text-base mt-3'>4. tinggal di save caranya tekan file lalu pilih simpan, kalo dinotepad.</p>
            <p className='text-base mt-3'>5. jangan lupa aktifkan cheatnya, tekan file ➡️ aktifkan cheats</p>
            {/* langkah langkah di emulator android */}
            <p className='mt-8 font-medium text-yellow-300'>B. Di Android dengan dengan emulator AetherSX2</p>
            <p className='text-base mt-3'>1. buka aplikasi AetherSX2 dan buka gamenya tapi jangan di buat main dulu, tunggu sampe gamenya sudah diload</p>
            <p className='text-base mt-3'>2. terus tekan tombol pengaturan ( <img src={LogoPauseAethersx2} alt="logopauseaethersx2" className='w-3 inline' /> ) kalo ga ada ya tinggal tekan kembali di hp bawaan</p>
            <p className='text-base mt-3'>3. akan muncul menu pengaturan, terus kalian tekan <img src={KodePatchAether} alt="kodepatchaether" className='w-28 inline' /></p>
            <p className='text-base mt-3'>4. lalu pilih "ubah Patch"</p>
            <p className='text-base mt-3'>5. kalian salin kode dibawah dan paste kan kedalam filenya</p>
            <p className='text-base mt-3'>6. terus save, kalian pencet tombol simpan di pojok kanan atas <img src={Save} alt="Save" className='w-6 inline' /></p>
            <p className='text-base mt-3'>7. cara aktifkan cheatnya, keluar permainan lalu ke pengaturan aplikasi ➡️ Umum ➡️ aktifkan kode patch</p>
            <p className='text-base mt-3'>8. masuk ke game, ulangi cara ke 1 & 2 dan tekan "aktifkan Patch"</p>
            <p className='text-base mt-3'>9. Selesai</p>
        </section>
        </>
    )
}