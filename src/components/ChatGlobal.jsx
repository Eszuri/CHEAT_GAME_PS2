import React, { useEffect, useRef, useState } from 'react'
import { name_db, supabase } from './Configuration';
import { PrevOrHome } from "../components/report"
import '../local.css'
import { Check } from './Check';


const Read_all = ({ read }) => {
    return (
        <><div className='bg-emerald-700 inline-block p-2 pt-0 w-[90%] max-[520px]:w-[80%] mb-3 rounded-sm'>
            <span className='hidden invisible scale-0'>{read.id}</span>
            <h1 className='text-2xl text-sky-400'>~ {read.nama}</h1>
            <p className='break-words'>{read.isi}</p>
            <span className='float-right mt-2 font-light italic'>{read.date}</span>
        </div>
            <br />
            <br />
        </>
    )
}


export default function ChatGlobal() {
    const [all, setAll] = useState([]);
    const [jumlah, setJumlah] = useState("");
    const Form = useRef(null);
    const nama = useRef(null);
    const isi = useRef(null);
    const succes = useRef(null);
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
    let bulan = perbulan[time.getMonth()];
    let tanggal = addZero(time.getDate());
    let tahun = addZero(time.getFullYear());
    let jam = addZero(time.getHours());
    let menit = addZero(time.getMinutes());



    async function read_all() {
        try {
            const { data, eror } = await supabase
                .from(name_db)
                .select("*")
            if (data) {
                setAll(data);
                document.getElementById('check').style.visibility = "hidden";
                setJumlah(data.length);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        document.getElementById('check').style.visibility = "visible";
        read_all();
    }, [])

    const kirimDB = async (event) => {
        Form.current.style.scale = 0;
        document.getElementById('check').style.visibility = "visible";
        event.preventDefault();
        try {
            await supabase
                .from(name_db)
                .insert({
                    id: jumlah + 1,
                    date: tanggal + "-" + bulan + "-" + tahun + " / " + jam + "." + menit,
                    nama: nama.current.value,
                    isi: isi.current.value
                })
                .then(() => {
                    document.getElementById('check').style.visibility = "hidden";
                    nama.current.value = "";
                    isi.current.value = "";
                    read_all();
                    setTimeout(() => {
                        chatScroll();
                    }, 500);
                    succes.current.style.right = '20px';
                    setTimeout(() => {
                        succes.current.style.right = '-100pc';
                    }, 3000);
                }).catch(() => {
                    alert('gagal terkirim');
                });
        } catch (error) {
            console.log(error);
        }
    }

    function showForm() {
        Form.current.style.scale = 1;
    }

    function closeForm() {
        Form.current.style.scale = 0;
    }

    return (
        <>
            <h1 className='text-center text-3xl text-white mt-4 mb-4'>Chat Global</h1>
            <div className='text-white bg-slate-700 w-[95%] h-[80vh] mr-auto ml-auto p-3 scrollY' ref={chatPosition}>
                {all.map((read) => (
                    <Read_all key={read.id} read={read} />
                ))}
                <button className='float-right absolute bottom-20 right-20 max-lg:right-14 max-md:right-12 max-sm:right-10 w-10 h-10 text-3xl scale-125 bg-sky-700 hover:bg-sky-800' onClick={chatScroll}
                >⇩</button>
            </div>
            <div className='w-full text-center mt-1'>
                <button className='w-[95%] bg-sky-700 text-white h-12 text-xl rounded-md hover:bg-sky-800' onClick={showForm}>Klik disini untuk mengirimkan pesan</button>
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
                                ref={nama}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <span className="block text-sm font-medium text-gray-300">
                                Isi Pesan
                            </span>
                            <textarea
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white resize-none h-24"
                                ref={isi}
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
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9">
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
