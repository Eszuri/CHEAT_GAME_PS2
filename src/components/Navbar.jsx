import Mylogo from '../images/MyLogo.png'
import '../local.css'
import { Link } from 'react-router-dom'
import Search from './Search';

export default function Navbar(props) {
    return (
        <>
            <section className='bg-slate-700 fixed w-full top-0 text-white flex items-center h-12 z-20 justify-between'>
                <div className='w-[100px]'>
                    <Link to={"/"}>
                        <img src={Mylogo} alt="logo pribadi" className='cursor-pointer' style={{ width: '80px' }} />
                    </Link>
                </div>
                <Search />
                <div className='mr-3 flex justify-between hover:opacity-70 bg-stone-900 cursor-pointer pt-1 pb-1 pl-4 pr-3 select-none text-lg rounded' onClick={() => {
                    document.getElementById('menurotate').classList.toggle("rotate-[270deg]");
                    if (document.getElementById('menulist').style.display == "none") {
                        document.getElementById('menulist').style.display = "block";
                    } else {
                        document.getElementById('menulist').style.display = "none";
                    }
                }}
                >
                    <p className='mr-1 select-none'>MENU</p>
                    <span className='rotate-90 duration-300 text-yellow-400 font-bold' id='menurotate'>{'﹥'}</span>
                </div>
                <div className='absolute right-3 top-[50px] bg-gray-700 w-36 text-xl rounded overflow-hidden duration-300 daftarCheat' style={{ display: "none" }} id='menulist'>
                    <Link to={'/list'} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Daftar Game</Link>
                    <Link to={"/report"} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Laporkan</Link >
                    <Link to={"/request"} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Request</Link>
                    <Link to={"/changelog"} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Changelog</Link>
                    <Link to={"/chat"} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Chat Global</Link>
                </div>
            </section>
        </>
    )
}

