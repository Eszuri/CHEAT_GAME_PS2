import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { PrevOrHome } from './report'

export function Huruf(props) {
    return (
        <>
            <Link to={props.url} className='rounded w-32 inline-block leading-[40px] max-md:w-16 max-[400px]:w-12 h-12 m-2 hover:bg-emerald-600 border-2 uppercase'>{props.abjad}</Link>
        </>)
}

export function PageHuruf(props) {
    return (
        <>
            <Navbar />
            <h1 className='text-white text-3xl ml-8 mt-16 uppercase'>{props.abjad}</h1>
            <hr className='w-[85%] ml-8 mb-2' />
        </>
    )
}

export function Tersedia(props) {
    return (
        <>
            <div className='flex ml-8 text-2xl'>
                <span className='text-yellow-500 mr-1'>├──</span>
                <Link to={props.url} className='cursor-pointer text-green-400 font-bold'>{props.abjad}</Link>
            </div>
        </>
    )
}

export function TersediaEnd(props) {
    return (
        <>
            <div className='flex ml-8 text-2xl'>
                <span className='text-yellow-500 mr-1'>└──</span>
                <Link to={props.url} className='cursor-pointer text-green-400 font-bold'>{props.abjad}</Link>
                <PrevOrHome />
            </div>
        </>
    )
}

export function NotTersedia(props) {
    return (
        <>
            <h1 className='ml-8 text-2xl text-red-600 font-bold'><span className='text-yellow-500 mr-1'>├──</span>Belum Tersedia</h1>
        </>
    )
}

export function NotTersediaEnd(props) {
    return (
        <>
            <h1 className='ml-8 text-2xl text-red-600 font-bold'><span className='text-yellow-500 mr-1'>└──</span>Belum Tersedia</h1>
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
                <p className='text-xs normal-case mt-3'>Jika ingin melihat apa saja cheat yg sudah ditambahkan lihat di <Link to={'/changelog'} target='_blank'>"Changelog"</Link></p>
                <hr className='mb-2 w-[70%] mr-auto ml-auto' />
                <div className='flex flex-wrap'>
                    <div className='w-full mt-2'>
                        <Huruf abjad='a' url='/list/a' />
                        <Huruf abjad='b' url='/list/b' />
                        <Huruf abjad='c' url='/list/c' />
                        <Huruf abjad='d' url='/list/d' />
                        <Huruf abjad='e' url='/list/e' />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='f' url='/list/f' />
                        <Huruf abjad='g' url='/list/g' />
                        <Huruf abjad='h' url='/list/h' />
                        <Huruf abjad='i' url='/list/i' />
                        <Huruf abjad='j' url='/list/j' />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='k' url='/list/k' />
                        <Huruf abjad='l' url='/list/l' />
                        <Huruf abjad='m' url='/list/m' />
                        <Huruf abjad='n' url='/list/n' />
                        <Huruf abjad='o' url='/list/o' />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='p' url='/list/p' />
                        <Huruf abjad='q' url='/list/q' />
                        <Huruf abjad='r' url='/list/r' />
                        <Huruf abjad='s' url='/list/s' />
                        <Huruf abjad='t' url='/list/t' />
                    </div>
                    <div className='w-full mt-5'>
                        <Huruf abjad='u' url='/list/u' />
                        <Huruf abjad='v' url='/list/v' />
                        <Huruf abjad='w' url='/list/w' />
                        <Huruf abjad='x' url='/list/x' />
                        <Huruf abjad='y' url='/list/y' />
                        <Huruf abjad='z' url='/list/z' />
                    </div>
                </div>
            </div>
        </>
    )
}
