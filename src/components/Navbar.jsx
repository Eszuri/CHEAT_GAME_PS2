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
                <div className='text-right w-full whitespace-nowrap'>
                    <Link className='text-xl font-bold mr-5 hover:border-b-2 border-b-green-600 cursor-pointer ' to={`/report`} onClick={() => { document.getElementById("bukaMenu").style.right = "100%"; window.scrollTo(0, 0) }}>Laporkan</Link>
                </div>
            </section>
        </>
    )
}

