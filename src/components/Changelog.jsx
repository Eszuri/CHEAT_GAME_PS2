import React, { Children } from 'react'
import '../local.css'
import Navbar from './Navbar';
import { PrevOrHome } from "../components/report"

export default function Changelog() {
    return (
        <>
            <Navbar />
            <div className='w-full bg-black p-2 text-left rounded overflow-hidden h-full'>
                <h1 className='text-2xl mt-14 text-white text-center'>Log Perubahan {"(Changelog)"}</h1>
                <br />
                {/* pemisah */}
                <BOXCHANGELOG tanggal="17 November 2023">
                    <WebUpdateTittle tittle="PEMBERITAHUAN PENTING" />
                    <WebUpdate perubahan="Alat Tempur Siap Kembali. Web Akan Aktif Kembali" />
                </BOXCHANGELOG>
                {/* pemisah */}
                <BOXCHANGELOG tanggal="25 Oktober 2023">
                    <WebUpdateTittle tittle="PEMBERITAHUAN PENTING" />
                    <WebUpdate perubahan="web ini ga aktif mulai saat ini (sementara bukan selamanya), dikarenakan alat tempur sedang rusak (alat tempur yg dimaksud pc gw) " />
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Need for Speed - Underground" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="18 Oktober 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Def Jam: Fight for NY (Europe)" />
                    <WebUpdate perubahan="Twisted Metal - Black (NTSC - U) [SCUS-97179]" />
                    <WebUpdate perubahan="Twisted Metal - Black (NTSC - U) [SCUS-97101]" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="3 Oktober 2023">
                    <WebUpdateTittle tittle="Penambahan Fitur Web" />
                    <WebUpdate perubahan="Menambahkan fitur Search di Navbar" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="1 Oktober 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Tekken 4" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="29 September 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Warriors, The (biasa di sebut The Warriors)" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="27 September 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Metal Slug Anthology (Belum selesai)" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="21 September 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Metal Slug 4 & 5 [Disc 1]" />
                    <WebUpdate perubahan="Metal Slug 4 & 5 [Disc 2]" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="18 September 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Metal Slug 3" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="15 September 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Ghost Rider" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="12 September 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Rumble Racing" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="29 Agustus 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="God Of War II (Belum selesai)" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="27 Agustus 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="God Of War" />
                </BOXCHANGELOG>

                {/* pemisah */}
                <BOXCHANGELOG tanggal="19 Agustus 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="God Hand" />
                </BOXCHANGELOG>

                <BOXCHANGELOG tanggal="16 Agustus 2023">
                    <WebUpdateTittle tittle="Penambahan Cheat" />
                    <WebUpdate perubahan="Mortal Kombat - Shaolin  Monk" />
                    <WebUpdate perubahan="Def Jam Fight - For NY" />
                    <WebUpdate perubahan="Digimon Rumble Arena 2" />
                </BOXCHANGELOG>
            </div >
            <PrevOrHome />
        </>
    )
}

export function BOXCHANGELOG({ tanggal, children }) {
    return (
        <>
            <span className='w-5 inline-block h-5 rounded-full border-4 bg-black border-emerald-600'></span>
            <div className='bg-stone-800 border-l-2 ml-[9px] pb-14 mt-[-10px]'>
                <h1 className='ml-5 font-bold text-white'>{tanggal}</h1>
                <div className='ml-5 mt-3'>
                    {children}
                </div>
            </div>
        </>
    )
}

export function WebUpdate(props) {
    return (
        <>
            <div className='flex'>
                <li className='list-disc rgb text-2xl'></li>
                <p className='text-white leading-8'>{props.perubahan}</p>
            </div>
        </>
    )
}

export function WebUpdateTittle(props) {
    return (
        <>
            <h1 className='text-xl text-white underline decoration-yellow-600 decoration-[3px] font-bold'>{props.tittle}</h1>
        </>
    )
}
