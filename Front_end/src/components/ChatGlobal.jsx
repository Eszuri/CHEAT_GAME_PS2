import Maintenance from './Maintenance';
import { useEffect, useRef, useState } from 'react'
import { PrevOrHome } from "../components/Form"
import { Check } from './Check';
import '../local.css'
import axios from 'axios';
import { API_URL } from './Configuration';


const Read_all = ({ read }) => {
    return (
        <>
            <div className='bg-emerald-700 inline-block p-2 pt-0 w-[90%] max-[520px]:w-[80%] mb-3 mt-3 rounded-sm'>
                <span className='hidden invisible scale-0'>{read._id}</span>
                <h1 className='text-2xl font-[Amaranth] text-sky-400'>~ {read.nama}</h1>
                <p className='break-words'>{read.message}</p>
                <span className='flex w-full justify-end items-center text-sm tracking-widest mt-2 font-light italic font-[Kdam]'>{read.date}</span>
            </div>
        </>
    )
}


export default function ChatGlobal() {
    axios.defaults.withCredentials = true;
    const [refresGetData, setrefresGetData] = useState()
    const [all, setAll] = useState([]);
    const [nama, setnama] = useState('')
    const [komentar, setkomentar] = useState('')
    const Form = useRef(null);
    const succes = useRef(null);
    const show_hide_form = useRef(null);
    const chatPosition = useRef(null);
    const chatScroll = () => {
        chatPosition.current.scrollTo({
            top: chatPosition.current.scrollHeight,
            behavior: 'smooth'
        })
    };


    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    const time = new Date();
    const perbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let tanggal = addZero(time.getDate());
    let bulan = perbulan[time.getMonth()];
    let tahun = addZero(time.getFullYear());
    let jam = addZero(time.getHours());
    let menit = addZero(time.getMinutes());
    const finallyDate = tanggal + ' ' + bulan + ' ' + tahun + ', ' + jam + ':' + menit;


    useEffect(() => {
        document.getElementById('check').style.visibility = "visible";
        getdata();
    }, [refresGetData])



    // mengambil data dari mongodb
    const getdata = async () => {
        await axios.get(API_URL + '/api/read-chat-global')
            .then((data) => {
                setAll(data.data)
                document.getElementById('check').style.visibility = "hidden";
            })
    }



    // mengirimkan ke database mongodb
    const kirimDB = async (event) => {
        show_hide_form.current.disabled = true;
        show_hide_form.current.style.opacity = '0.4';
        show_hide_form.current.style.cursor = 'not-allowed';
        Form.current.style.scale = 0;
        document.getElementById('check').style.visibility = "visible";
        event.preventDefault();
        await axios.post(API_URL + '/api/chat-global', { nama: nama, message: komentar, date: finallyDate })
            .then(() => {
                setnama(''); setkomentar(''); setrefresGetData(getdata());
                document.getElementById('check').style.visibility = "hidden";
                succes.current.style.right = '5px';
                setTimeout(() => {
                    succes.current.style.right = '-100pc';
                    show_hide_form.current.disabled = false;
                    show_hide_form.current.style.opacity = '1';
                    show_hide_form.current.style.cursor = 'pointer';
                }, 3500);
            })
    }

    // toggle for show/hide form 
    function showForm() { Form.current.style.scale = 1; }; function closeForm() { Form.current.style.scale = 0; }

    return (
        <>
            {/* <Maintenance /> */}
            <h1 className='text-center text-3xl text-white mt-4 mb-4'>Chat Global</h1>
            <div className='text-white bg-slate-700 w-[95%] h-[80vh] mr-auto ml-auto p-3 scrollY' ref={chatPosition}>
                {all.map((read) => (
                    <Read_all key={read._id} read={read} />
                ))}




                {/* <div className='bg-emerald-700 inline-block p-2 pt-0 w-[90%] max-[520px]:w-[80%] mb-3 mt-3 rounded-sm'>
                    <span className='hidden invisible scale-0 opacity-0'>ini id</span>
                    <h1 className='text-2xl text-sky-400'>~ ini nama</h1>
                    <p className='break-words'>ss</p>
                    <span className='float-right mt-2 font-light italic'>tanggal</span>
                </div> */}






                <button className='float-right absolute bottom-20 right-20 max-lg:right-14 max-md:right-12 max-sm:right-10 w-10 h-10 text-3xl scale-125 bg-sky-700 hover:bg-sky-800' onClick={chatScroll}
                >⇩</button>
            </div>
            <div className='w-full text-center mt-1'>
                <button className='w-[95%] bg-sky-700 text-white h-12 text-xl rounded-md hover:bg-sky-800' onClick={showForm} ref={show_hide_form} disabled={false}>Klik disini untuk mengirimkan pesan</button>
            </div>
            <section className='fixed inset-x-0 inset-y-0 flex justify-center items-center overflow-y-auto duration-300' style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", scale: 0 }} ref={Form}>
                <div className="max-w-md mx-auto relative z-10 bg-gray-800 p-5 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 w-[75%] overflow-hidden">
                    <h2 className="text-2xl font-bold text-white mb-6">Mengirimkan Pesan</h2>
                    <form
                        onSubmit={kirimDB}
                    >
                        <div className="mb-4">
                            <span className="block text-sm font-medium text-gray-300">
                                Nama Antum
                            </span>
                            <input
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                                type="text"
                                value={nama}
                                onChange={(e) => { setnama(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <span className="block text-sm font-medium text-gray-300">
                                Isi Pesan
                            </span>
                            <textarea
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white resize-none h-24"
                                value={komentar}
                                onChange={(e) => { setkomentar(e.target.value) }}
                                required
                            />
                        </div>
                        <div className='flex justify-between'>
                            <div className="flex">
                                <span
                                    className="bg-gradient-to-r from-rose-600 via-red-500 to-red-600 text-white px-4 py-2 font-bold rounded-md hover:opacity-80 inline-block cursor-pointer"
                                    onClick={closeForm}
                                >
                                    Batal
                                </span>
                            </div>
                            <div className="flex">
                                <button
                                    className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                                    type="submit"
                                >
                                    Kirim Pesan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <div className='fixed top-3 right-[-100pc] duration-700' ref={succes}>
                <div className="flex items-center w-[29rem] h-14 p-4 space-x-4 text-green-800 bg-green-200 divide-x divide-gray-700 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-slate-300" role="alert">
                    <svg className="w-5 h-5 text-green-500  rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9">
                        </path>
                    </svg>
                    <div className="pl-4 text-base font-bold text-emerald-500">Message sent successfully.</div>
                </div>
            </div>
            <Check loadingtext="Loading ..." />
            <PrevOrHome />
        </>
    )
}
