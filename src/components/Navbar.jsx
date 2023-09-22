import Mylogo from '../images/MyLogo.png'
import '../Global.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <section className='bg-slate-700 fixed w-full top-0 text-white flex items-center h-12 z-20'>
                <div className='w-[100px]'>
                    <Link to={"/"} onClick={() => { document.getElementById("bukaMenu").style.right = "100%" }}>
                        <img src={Mylogo} alt="logo pribadi" className='w-[100px] cursor-pointer' />
                    </Link>
                </div>
                <div className=' flex justify-between hover:opacity-70 bg-stone-900 absolute right-5 cursor-pointer pt-1 pb-1 pl-6 pr-3 select-none text-lg rounded' onClick={() => {
                    document.getElementById('menurotate').classList.toggle("rotate-[270deg]");
                    document.getElementById('menulist').classList.toggle("h-auto");
                    if (document.getElementById('menulist').style.height == "0px") {
                        document.getElementById('menulist').style.height = "125px";
                    } else {
                        document.getElementById('menulist').style.height = "0px";
                    }
                }}>
                    <p className='mr-5'>MENU</p>
                    <span className='ml-5 rotate-90 duration-300 text-yellow-400 font-bold' id='menurotate'>{'﹥'}</span>
                </div>
                <div className='absolute right-5 top-[50px] bg-gray-700 w-36 text-xl rounded overflow-hidden duration-300' style={{ height: '0px' }} id='menulist'>
                    <Link className='block hover:bg-gray-800 p-1 m-1'>Daftar Game</Link>
                    <Link className='block hover:bg-gray-800 p-1 m-1'>Laporkan</Link>
                    <Link className='block hover:bg-gray-800 p-1 m-1'>Request</Link>
                </div>
            </section>
        </>
    )
}

