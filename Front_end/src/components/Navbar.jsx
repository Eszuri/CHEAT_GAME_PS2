import Mylogo from '../images/MyLogo.png'
import '../local.css'
import { Link, redirect } from 'react-router-dom'
import Search from './Search';
import { useEffect, useRef, useState } from 'react';
import redirectIMG from '../images/redirect.svg'

export default function Navbar(props) {
    useEffect(() => {
    })
    return (
        <>
            <section className='bg-slate-700 fixed w-full top-0 text-white flex items-center h-12 z-20 justify-between'>
                <div className='w-[100px]'>
                    <Link to={"/"}>
                        <img src={Mylogo} alt="logo pribadi" className='cursor-pointer' style={{ width: '80px' }} />
                    </Link>
                </div>
                <Search />
                <Dropdown />
            </section>
        </>
    )
}



const Dropdown = () => {
    function useClickOutside(ref, onClickOutside) {
        useEffect(() => {
            if (open == true) {
                document.getElementById('menurotate').style.rotate = "270deg";
            } else {
                document.getElementById('menurotate').style.rotate = "90deg";
            }
            /**
             * Invoke Function onClick outside of element
            */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    onClickOutside();
                }
            }
            // Bind
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // dispose
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, onClickOutside]);
    }

    let [open, setOpen] = useState(false);
    const wrapperRef = useRef("menu");
    useClickOutside(wrapperRef, () => {
        setOpen(false);
    });

    return (
        <section>
            <div ref={wrapperRef}>

                <div className='mr-3 flex justify-between hover:opacity-70 bg-stone-900 cursor-pointer pt-1 pb-1 pl-4 pr-3 select-none text-lg rounded' onClick={() => {
                    setOpen(!open)
                }}
                >
                    <p className='mr-1 select-none'>MENU</p>
                    <span className='duration-300 text-yellow-400 font-bold' style={{ rotate: "90deg" }} id='menurotate'>{'﹥'}</span>
                </div>

                {open && (
                    <div className='absolute right-3 top-[50px] bg-gray-700 w-36 text-xl rounded overflow-hidden duration-500 daftarCheat'>
                        <Link to={'/list'} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Daftar Game</Link>
                        <Link to={"/report"} className='block hover:bg-gray-800 p-1 m-1 duration-300 '>Laporkan</Link >
                        <Link to={"/request"} className='block hover:bg-gray-800 p-1 m-1 duration-300 '>Request</Link>
                        <Link to={"/changelog"} className='block hover:bg-gray-800 p-1 m-1 duration-300'>Changelog</Link>
                        <Link to={"/chat"} className='block hover:bg-gray-800 p-1 m-1 duration-300 '>Chat Global</Link>
                        <Link to={"/tutorial"} className='hover:bg-gray-800 p-1 m-1 duration-300 flex justify-between'>Tutorial<img src={redirectIMG} className='w-7'></img></Link>
                    </div>
                )}
            </div>
        </section>
    );
};




export function NavbarTutorial(props) {
    return (
        <>
            <div className="absolute top-2 left-2 font-[Taylor] flex gap-2 flex-wrap">
                <Link to={'/'} className="hover:underline underline-offset-4 duration-300 decoration-blue-500">HOME</Link>
                <span>/</span>
                {props.children}
            </div>
        </>
    )
}