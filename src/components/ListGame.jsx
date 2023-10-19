import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { PrevOrHome } from './report'
import { componentA } from "../list-cheat/A/LIST_A";
import { componentB } from '../list-cheat/B/LIST_B';
import { componentC } from '../list-cheat/C/LIST_C';
import { componentD } from '../list-cheat/D/LIST_D';
import { componentE } from '../list-cheat/E/LIST_E';
import { componentF } from '../list-cheat/F/LIST_F';
import { componentG } from '../list-cheat/G/LIST_G';
import { componentH } from '../list-cheat/H/LIST_H';
import { componentI } from '../list-cheat/I/LIST_I';
import { componentJ } from '../list-cheat/J/LIST_J';
import { componentK } from '../list-cheat/K/LIST_K';
import { componentL } from '../list-cheat/L/LIST_L';
import { componentM } from '../list-cheat/M/LIST_M';
import { componentN } from '../list-cheat/N/LIST_N';
import { componentO } from '../list-cheat/O/LIST_O';
import { componentP } from '../list-cheat/P/LIST_P';
import { componentQ } from '../list-cheat/Q/LIST_Q';
import { componentR } from '../list-cheat/R/LIST_R';
import { componentS } from '../list-cheat/S/LIST_S';
import { componentT } from '../list-cheat/T/LIST_T';
import { componentU } from '../list-cheat/U/LIST_U';
import { componentV } from '../list-cheat/V/LIST_V';
import { componentW } from '../list-cheat/W/LIST_W';
import { componentX } from '../list-cheat/X/LIST_X';
import { componentY } from '../list-cheat/Y/LIST_Y';
import { componentZ } from '../list-cheat/Z/LIST_Z';

export function Huruf(props) {
    return (
        <>
            <div className='hover:bg-emerald-700 border-2 w-[90%] mr-auto ml-auto mb-10 rounded flex justify-between'>
                <Link to={props.url} className='rounded w-full inline-block text-left text-xl p-2  uppercase pl-5'>{props.abjad}</Link>
                <h1 className="text-xl p-2 pr-5">{props.jumlah}</h1>
            </div>
        </>)
}

export function PageHuruf(props) {
    return (
        <>
            <Navbar />
            <h1 className='text-white text-3xl ml-8 mt-16 uppercase'>{props.abjad}</h1>
            <hr className='w-[85%] ml-8 mb-2' />
            <div id='notTersedia' style={{ display: "none" }}>
                <NotTersedia />
                <NotTersedia />
                <NotTersedia />
                <NotTersediaEnd />
            </div>
        </>
    )
}

export function Tersedia(props) {
    return (
        <>
            <div className='flex ml-8 text-2xl'>
                <span className='text-yellow-500 mr-1'>├──</span>
                <Link to={props.url} className='cursor-pointer text-green-400 font-bold text-xl max-sm:text-base'>{props.abjad}</Link>
            </div>
        </>
    )
}

export function TersediaEnd(props) {
    return (
        <>
            <div className='flex ml-8 text-2xl'>
                <span className='text-yellow-500 mr-1'>└──</span>
                <Link to={props.url} className='cursor-pointer text-green-400 font-bold text-xl max-sm:text-base'>{props.abjad}</Link>
            </div>
            <PrevOrHome />
        </>
    )
}

export function NotTersedia(props) {
    return (
        <>
            <h1 className='ml-8 text-red-600 font-bold text-xl max-sm:text-base'><span className='text-yellow-500 mr-1 text-2xl'>├──</span>Belum Tersedia</h1>
        </>
    )
}

export function NotTersediaEnd(props) {
    return (
        <>
            <h1 className='ml-8 text-xl max-sm:text-base text-red-600 font-bold'><span className='text-yellow-500 mr-1 text-2xl'>└──</span>Belum Tersedia</h1>
            <PrevOrHome />
        </>
    )
}


export default function ListGame() {
    return (
        <>
            <Navbar />
            <div className='text-2xl text-white text-center uppercase mt-16'>
                <h1>Daftar Cheat Pnach</h1>
                {/* <p className='text-xs normal-case mt-3'>Jika ingin melihat apa saja cheat yg sudah ditambahkan lihat di <Link to={'/changelog'} target='_blank'>"Changelog"</Link></p> */}
                <div className="mb-2 w-[90%] mr-auto ml-auto mt-16">
                    <div className="flex justify-between">
                        <h1 className='text-lg'>alphabet</h1>
                        <h1 className='text-lg'>Jumlah Game</h1>
                    </div>
                    <hr />
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full mt-2'>
                        <Huruf abjad='a' url='/list/a' jumlah={componentA} />
                        <Huruf abjad='b' url='/list/b' jumlah={componentB} />
                        <Huruf abjad='c' url='/list/c' jumlah={componentC} />
                        <Huruf abjad='d' url='/list/d' jumlah={componentD} />
                        <Huruf abjad='e' url='/list/e' jumlah={componentE} />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='f' url='/list/f' jumlah={componentF} />
                        <Huruf abjad='g' url='/list/g' jumlah={componentG} />
                        <Huruf abjad='h' url='/list/h' jumlah={componentH} />
                        <Huruf abjad='i' url='/list/i' jumlah={componentI} />
                        <Huruf abjad='j' url='/list/j' jumlah={componentJ} />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='k' url='/list/k' jumlah={componentK} />
                        <Huruf abjad='l' url='/list/l' jumlah={componentL} />
                        <Huruf abjad='m' url='/list/m' jumlah={componentM} />
                        <Huruf abjad='n' url='/list/n' jumlah={componentN} />
                        <Huruf abjad='o' url='/list/o' jumlah={componentO} />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='p' url='/list/p' jumlah={componentP} />
                        <Huruf abjad='q' url='/list/q' jumlah={componentQ} />
                        <Huruf abjad='r' url='/list/r' jumlah={componentR} />
                        <Huruf abjad='s' url='/list/s' jumlah={componentS} />
                        <Huruf abjad='t' url='/list/t' jumlah={componentT} />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='u' url='/list/u' jumlah={componentU} />
                        <Huruf abjad='v' url='/list/v' jumlah={componentV} />
                        <Huruf abjad='w' url='/list/w' jumlah={componentW} />
                        <Huruf abjad='x' url='/list/x' jumlah={componentX} />
                        <Huruf abjad='y' url='/list/y' jumlah={componentY} />
                        <Huruf abjad='z' url='/list/z' jumlah={componentZ} />
                    </div>
                </div>
            </div>
        </>
    )
}
