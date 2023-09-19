import { Link } from 'react-router-dom'
import '../Global.css'
import '../local.css'
import TutupTab from "../images/tutup-tab.svg"
import ScrollAtas from "../images/arrow-up.svg"
import { useRef } from 'react'

function Menu() {
    const tutupTabRef = useRef(null);
    function tutupTabClick() {
        tutupTabRef.current.style.right = "100%";
        document.getElementById("ScrollAtasId").style.visibility = "hidden";
        window.scrollTo(0, 0);
    }
    return (
        <>
            <section className='right-[100%] fixed top-11 text-white w-full z-10 bg-gray-800 h-screen scrollY duration-500 scroll-smooth' id='bukaMenu' ref={tutupTabRef}>
                <div className='w-full flex justify-end'>
                    <img src={TutupTab} alt="tutup tab" className='w-20 rounded-full bg-blue-600 max-sm:w-14 active:opacity-25 cursor-pointer select-none mt-2' onClick={() => {
                        tutupTabRef.current.style.right = "100%"; document.getElementById("ScrollAtasId").style.visibility = "hidden";
                    }} title='tutup menu' />
                    <img src={ScrollAtas} alt="scroll ke atas" className='invisible rounded-full bg-blue-600 w-16 max-sm:w-14 active:opacity-25 cursor-pointer select-none fixed right-5 bottom-0' onClick={() => { document.getElementById("bukaMenu").scrollTop = "0" }} id='ScrollAtasId' />
                </div>
                <div className='uppercase mt-10 flex flex-wrap justify-center mb-3 text-xl w-[90%] ml-auto mr-auto'>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollA").scrollIntoView(); }}>a</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollB").scrollIntoView(); }}>b</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollC").scrollIntoView(); }}>c</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollD").scrollIntoView(); }}>d</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollE").scrollIntoView(); }}>e</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollF").scrollIntoView(); }}>f</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollG").scrollIntoView(); }}>g</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollH").scrollIntoView(); }}>h</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollI").scrollIntoView(); }}>i</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollJ").scrollIntoView(); }}>j</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollK").scrollIntoView(); }}>k</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollL").scrollIntoView(); }}>l</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollM").scrollIntoView(); }}>m</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollN").scrollIntoView(); }}>n</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollO").scrollIntoView(); }}>o</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollP").scrollIntoView(); }}>p</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollQ").scrollIntoView(); }}>q</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollR").scrollIntoView(); }}>r</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollS").scrollIntoView(); }}>s</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollT").scrollIntoView(); }}>t</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollU").scrollIntoView(); }}>u</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollV").scrollIntoView(); }}>v</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollW").scrollIntoView(); }}>w</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollX").scrollIntoView(); }}>x</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollY").scrollIntoView(); }}>y</span>
                    <span className='cursor-pointer border-2 border-red-700 mr-3 w-24 h-20 mb-3 rounded-[5px] hover:bg-red-600 flex justify-center items-center max-lg:w-20 max-lg:h-16 max-sm:w-12 max-sm:h-10 select-none' onClick={() => { document.getElementById("ScrollZ").scrollIntoView(); }}>z</span>
                </div>
                <hr className='w-[90%] mr-auto ml-auto' />
                <section className='w-[90%] mr-auto ml-auto max-sm:w-[95%]'>
                    <div className='mt-10' id='ScrollA'>
                        <ul className='text-lg'>A
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollB'>
                        <ul className='text-lg'>B
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollC'>
                        <ul className='text-lg'>C
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollD'>
                        <ul className='text-lg'>D
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/defjam"} onClick={tutupTabClick}>DEF JAM - FIGHT FOR NY</Link></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/digruma2"} onClick={tutupTabClick}>DIGIMON RUMBLE ARENA 2</Link></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollE'>
                        <ul className='text-lg'>E
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollF'>
                        <ul className='text-lg'>F
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollG'>
                        <ul className='text-lg'>G
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/ghostrider"} onClick={tutupTabClick}>GHOST RIDER</Link></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/godhand"} onClick={tutupTabClick}>GOD HAND</Link></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/godofwar"} onClick={tutupTabClick}>GOD OF WAR</Link></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/godofwar2"} onClick={tutupTabClick}>GOD OF WAR II</Link></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollH'>
                        <ul className='text-lg'>H
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollI'>
                        <ul className='text-lg'>I
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollJ'>
                        <ul className='text-lg'>J
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollK'>
                        <ul className='text-lg'>K
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollL'>
                        <ul className='text-lg'>L
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollM'>
                        <ul className='text-lg'>M
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/metalslug3"} onClick={tutupTabClick}>Metal Slug 3</Link></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/metalslug4&5-disc1"} onClick={tutupTabClick}>Metal Slug 4 & 5 {'[Disc 1]'}</Link></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/mksm"} onClick={tutupTabClick}>Mortal Kombat Shaolin Monk</Link></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollN'>
                        <ul className='text-lg'>N
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollO'>
                        <ul className='text-lg'>O
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollP'>
                        <ul className='text-lg'>P
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollQ'>
                        <ul className='text-lg'>Q
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollR'>
                        <ul className='text-lg'>R
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <Link className='text-green-500 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer' to={"/rumbleracing"} onClick={tutupTabClick}>Rumble Racing</Link></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollS'>
                        <ul className='text-lg'>S
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollT'>
                        <ul className='text-lg'>T
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollU'>
                        <ul className='text-lg'>U
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollV'>
                        <ul className='text-lg'>V
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollW'>
                        <ul className='text-lg'>W
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollX'>
                        <ul className='text-lg'>X
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10' id='ScrollY'>
                        <ul className='text-lg'>Y
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                    <div className='mt-10 pb-20' id='ScrollZ'>
                        <ul className='text-lg'>Z
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>├── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                            <li className='flex flex-nowrap'>└── <span className='text-red-400 font-semibold overflow-auto ml-1 whitespace-nowrap cursor-pointer'>belom Tersedia</span></li>
                        </ul>
                    </div>
                </section>
            </section >
        </>
    )
}

export default Menu;
