import { Link } from 'react-router-dom'
import step1 from '../images/TutorialPages/1-joker-command/1.png'
import step2 from '../images/TutorialPages/1-joker-command/2.png'
import step3 from '../images/TutorialPages/1-joker-command/3.png'
import step4 from '../images/TutorialPages/1-joker-command/4.png'
import step5 from '../images/TutorialPages/1-joker-command/5.png'
import step6 from '../images/TutorialPages/1-joker-command/6.png'
import step7 from '../images/TutorialPages/1-joker-command/7.png'
import step8 from '../images/TutorialPages/1-joker-command/8.png'
import { useEffect } from 'react'
import { NavbarTutorial } from '../components/Navbar'

export default function JokerCommand() {
    useEffect(() => {
        console.log(window.location.pathname);
    })
    return (
        <>
            <div className='text-white w-[95%] mr-auto ml-auto'>
                <NavbarTutorial>
                    <Link to={'/tutorial'} className="hover:underline underline-offset-4 duration-300 decoration-blue-500">TUTORIAL</Link>
                    <span>/</span>
                    <span>MEMBUAT JOKER COMMAND</span>
                </NavbarTutorial>
                <h1 className='text-3xl text-center mt-24 font-[Taylor] font-semibold tracking-wide max-sm:text-xl'>Tutorial Membuat joker command dengan cheat engine menjadi kode patch</h1>
                <br /><br /><br /><br />
                <article className=' font-[Saira] text-lg'>
                    jika belum tau apa itu joker command, ini jawabannya. <br />
                    Joker command adalah kode yang addressnya merupakan posisi dalam RAM, yang memberitahukan tombol pada pengontrol yg sedang ditekan!
                    <br /><br />
                    lalu apa fungsi dari joker command? <br />
                    dengan joker command kita bisa membuat cheat yg mana ketika kita mencoba menekan tombol tertentu maka akan menjalankan kode lainnya. contohnya jika saya menekan tombol L1 maka HP <span className='text-green-400'>(health point)</span> akan pulih kembali dari sekarat jadi HP penuh
                    <br /><br />
                    nah pada tutorial kali ini saya akan mencari joker command lalu mengubah menjadi kode patch pada game emulator PS2 (PCSX2).
                    <br />
                    game yg saya contohkan pada tutorial kali ini "Mortal Kombat Shaolin Monk"
                    <br />
                    langsung aja cusss
                </article>
                <br /><br /><br /><br /><br />
                <div className='font-[Saira] text-lg'>
                    <h5>langkah pertama siapkan dulu cheat engine dan pcsx2 nya. <br />lalu pilih proses pada cheat engine. ikuti seperti pada gambar</h5>
                    <img src={step1} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>langkah kedua ikuti seperti pada gambar</h5>
                    <img src={step2} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>langkah ketiga masukan huruf FFFF dengan kondisi jangan tekan apa apa pada jendela pcsx2. <br />lalu tekan first scan</h5>
                    <img src={step3} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>setelah tekan first scan maka address yg ditemukan sangatlah banyak</h5>
                    <img src={step4} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>langkah keempat ganti value dari FFFF menjadi FEFF, lalu tekan next scan. <br />
                        sebelum tekan next scan, tombol L2 harus ditekan terus jangan dilepas sampai next scan selesai.
                    </h5>
                    <p>penjelasan singkat: <br />
                        FFFF = adalah kondisi tidak menekan tombol apa apa <br />
                        FEFF = adalah kondisi ketika menekan tombol L2
                    </p>
                    <img src={step5} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>maka akan ditemukan addressnya. biasanya bisa lebih dari 1 address</h5>
                    <img src={step6} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>select address yg angka depannya 20, lalu tekan icon panah warna merah. <br />dari ketiga address tersebut pilih salah satu saja yg mau dijadikan kode patch</h5>
                    <img src={step7} alt="step" className='w-[50%]' />
                    <br /> <br /> <br /> <br />
                    <h5>disini saya contohkan address yg paling atas. <br /> <Link className='underline'>kalian harus tau dulu caranya ubah kode dari cheat engine menjadi kode patch terlebih dahulu.</Link> <br /> bedanya dengan kode patch yg biasa dibuat, ada pada valuenya. <br />1. setelah extended, masukan angka 0000 lalu ditambah dengan value tombol yg ingin dipicu. <br />saya contohkan dengan tombol L2 yaitu FEFF. <br /><Link to={'/tutorial/create-joker-command/list-jc'} className='font-semibold tracking-wider underline hover:decoration-blue-600 underline-offset-4'> saya sudah buatkan daftar untuk value berserta keterangan untuk setiap tombol nya </Link><br />2. ganti angka address yg depannya 20xxxxxx menjadi <span className='font-[Amaranth]'>D0xxxxxx.</span> <br />ganti angka 2 menjadi huruf <span className='font-[Amaranth]'>D</span>, cukup sehuruf saja.</h5>
                    <img src={step8} alt="step" className='w-[80%]' />
                    <br /><br /><br /><br /><br /><br /><br />
                    <h1>sampai sini sudah selesai untuk membuat joker command.
                        <br />
                        contoh diatas adalah kode patch yg sudah jadi. ketika saya menekan L2 maka exp akan bertambah menjadi 999999999
                    </h1>
                    <br /><br /><br /><br /><br />
                    <h1 className='font-bold text-xl tracking-wider'>Ada aturan untuk menggunakan joker command:</h1>
                    <ul>
                        <li className='list-decimal'><span className='font-semibold'>joker command hanya berfungsi untuk satu kode patch saja</span> <br />jika ingin lebih dari satu gunakan joker command pada setiap kode patch yg diinginkan
                            <br />
                            contoh: <br />
                            patch=1,EE,20C08928,extended,00000258 //hp bar <br />
                            patch=1,EE,205CCE30,extended,42C80000 //energy bar <br /> <br />
                            menjadi: <br />
                            patch=1,EE,D0651F02,extended,0000FEFF //L2 address <br />
                            patch=1,EE,20C08928,extended,00000258 //hp bar <br />
                            patch=1,EE,D0651F02,extended,0000FEFF //L2 address <br />
                            patch=1,EE,205CCE30,extended,42C80000 //energy bar
                        </li>
                        <br />
                        <li className='list-decimal'><span className='font-semibold'>joker command dan kode patch yg ingin dipicu ketika tekan tombol, jangan tertukar posisi.</span>
                            <br />
                            joker command terlebih dahulu, kemudian baru kode patch yg ingin dipicu
                        </li>
                        <br /><br /><br /><br /><br />
                    </ul>
                    <h1 className='font-bold text-xl tracking-wider'>Kekurangan menggunakan joker commmand</h1>
                    <ul>
                        <li className='list-decimal'><span className='font-semibold'>kode patch yg terpicu, valuenya masih bisa berubah. berbeda jika tanpa joker command yg valuenya tetap. </span><br />
                            pendapatku sendiri ini sebuah kelebihan si, bukan Kekurangan. <br />
                            contoh: <br />
                            ketika tekan tombol L2 maka akan menambahkan hp menjadi penuh kembali. tetapi jika terkena serangan maka hp akan tetap berkurang. <br />
                            jika kode patch tanpa joker command, value tidak akan berubah, apapun pemicunya.
                        </li>
                        <br />
                        <li className='list-decimal'><span className='font-semibold'>tombol yg ingin digunakan untuk dijadikan joker command cukup susah untuk memilih.</span>
                            <br />
                            misalkan game pada mortal kombat shaolin monk, semua tombol berfungsi semua. <br />
                            maksudnya jarang ada tombol yg ditekan tidak akan mempengaruhi gameplay, <br />
                            tombol yg paling tidak mengganggu gameplay ya cuma L2 sama R1.
                        </li>
                    </ul>
                    <br /><br /><br /><br /><br /><br />
                    <h1 className='text-center text-2xl font-[Taylor]'>itulah tutorial ribet versi gw <br /> <Link>jika ingin melihat video tutorial nya, klik saya dong</Link></h1>
                    <br /><br />
                </div>
            </div>
        </>
    )
}




export function ListJokerCommand() {
    function Box(props) {
        return (
            <>
                <div className='bg-slate-700 w-[65%] max-md:w-[80%] max-sm:w-full h-10 flex items-center p-2 border-2 truncate font-[Amaranth]' style={{ borderTopWidth: props.borderUP, borderBottomWidth: props.borderDOWN }}>
                    <span className='text-xl max-sm:text-base max-sm:w-[55px] w-[75px] p-2 border-r-[1px] font-[Saira] font-bold tracking-wider'>{props.value}</span>
                    <span className='text-xl max-sm:text-base p-2 border-l-[1px] truncate max-[350px]:text-[15px] tracking-wide' style={{}}>{props.Ket} <span className='text-sky-500'>{props.en}</span></span>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='text-white w-[90%] mr-auto ml-auto max-sm:w-[95%]'>
                <NavbarTutorial>
                    <Link to={'/tutorial'} className="hover:underline underline-offset-4 duration-300 decoration-blue-500">TUTORIAL</Link>
                    <span>/</span>
                    <Link to={'/tutorial/create-joker-command'} className="hover:underline underline-offset-4 duration-300 decoration-blue-500">MEMBUAT JOKER COMMAND</Link>
                    <span>/</span>
                    <span>DAFTAR VALUE PADA CONTROLLER PS2</span>
                </NavbarTutorial>
                <h1 className='font-[Taylor] text-center text-4xl mt-24'>Daftar value pada controller ps2</h1>
                <div className='grid mt-20'>
                    <span className='font-bold text-xl'>NOTE:</span>
                    <h1 className='text-lg font-semibold'>untuk analog L3 dan R3 tidak ada</h1>
                    <Box borderDOWN="1px" borderUP="2px" value="FFFF" Ket="Tidak Menekan Tombol" en="(Default)" />
                    <Box borderDOWN="1px" borderUP="1px" value="7FFF" Ket="KOTAK" en="(SQUARE)" />
                    <Box borderDOWN="1px" borderUP="1px" value="EFFF" Ket="SEGITIGA" en="(TRIANGLE)" />
                    <Box borderDOWN="1px" borderUP="1px" value="DFFF" Ket="BULAT" en="(CIRCLE)" />
                    <Box borderDOWN="2px" borderUP="1px" value="BFFF" Ket="X" en="(CROSS)" />
                    <br />
                    <Box borderDOWN="1px" borderUP="2px" value="FFEF" Ket="ATAS" en="(D-PAD UP)" />
                    <Box borderDOWN="1px" borderUP="1px" value="FFBF" Ket="BAWAH" en="(D-PAD DOWN)" />
                    <Box borderDOWN="1px" borderUP="1px" value="FF7F" Ket="KIRI" en="(D-PAD LEFT)" />
                    <Box borderDOWN="2px" borderUP="1px" value="FFDF" Ket="KANAN" en="(D-PAD RIGHT)" />
                    <br />
                    <Box borderDOWN="1px" borderUP="2px" value="FBFF" Ket="L1" />
                    <Box borderDOWN="1px" borderUP="1px" value="FEFF" Ket="L2" />
                    <Box borderDOWN="1px" borderUP="1px" value="F7FF" Ket="R1" />
                    <Box borderDOWN="2px" borderUP="1px" value="FDFF" Ket="R2" />
                    <br />
                    <Box borderDOWN="1px" borderUP="2px" value="FFFE" Ket="SELECT" />
                    <Box borderDOWN="1px" borderUP="1px" value="FFF7" Ket="START" />
                    <Box borderDOWN="1px" borderUP="1px" value="FFFD" Ket="L3" />
                    <Box borderDOWN="2px" borderUP="1px" value="FFFB" Ket="R3" />
                </div>
            </div>
        </>
    )
}