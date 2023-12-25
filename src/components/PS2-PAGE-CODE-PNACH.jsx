import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RedirectLink from "/src/images/redirect.svg"

import '../local.css'
import { Check } from './Check';

export function BoilerplateRawPNACH(props) {
    const [content, setContent] = useState('');
    const [Copied, setCopied] = useState('');
    useEffect(() => {
        document.getElementById('check').style.visibility = "visible"
        fetch(props.urlFile)
            .then(response => response.text())
            .then(text => {
                document.getElementById('check').style.visibility = "hidden";
                setContent(text);
            })
            .catch(error => {
                console.error('gagal load file:', error);
                alert('gagal load kode pnach, harap refresh halaman ini ');
            });
    }, []);
    return (
        <>
            <section className='w-[95%] mr-auto ml-auto text-white'>
                <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mt-32 mb-7'>Kode Pnach</h1>
                <div className='flex mb-[37px]'>
                    <div style={{ width: '0%' }} className='z-10 duration-300 text-center fixed top-14 left-0 flex justify-center items-center overflow-hidden' id='copied'><h1 className='text-center w-[80%] h-10 flex justify-center items-center rounded text-xl font-sans font-bold' id='copied2'>{Copied}</h1></div>
                    <input className='duration-300 cursor-pointer absolute inline-block w-44 bg-slate-600 text-2xl rounded-md p-[6px] text-center hover:bg-slate-500 active:bg-slate-700' onClick={() => {
                        const textToCopy = document.getElementById("pnachKode").innerText;
                        navigator.clipboard.writeText(textToCopy)
                            .then(function () {
                                // document.getElementById("copied").classList.add("kopi-muncul");
                                document.getElementById("copied2").style.backgroundColor = "rgb(0, 173, 32)";
                                document.getElementById("isCopy").style.opacity = "0.3";
                                setCopied('Kode Berhasil DiSalin');
                                document.getElementById("copied").style.width = "100%";
                                setTimeout(function () {
                                    document.getElementById("isCopy").style.opacity = "1";
                                    document.getElementById("copied").style.width = "0%";
                                }, 2000);
                            })
                            .catch(function () {
                                document.getElementById("copied2").style.backgroundColor = "rgb(190, 0, 0)";
                                document.getElementById("isCopy").style.opacity = "0.3";
                                setCopied('Kode Gagal DiSalin');
                                setTimeout(function () {
                                    document.getElementById("isCopy").style.opacity = "1";
                                    document.getElementById("copied").style.width = "0%";
                                }, 2000);
                            });
                    }} value="Salin Kode" type='button' id='isCopy' />
                </div>
                <div className='p-1'></div>
                <pre className='text-green-400 selection:bg-violet-900 bg-black rounded-lg pl-1 w-full text-sm whitespace-pre-wrap sm:text-xl' id='pnachKode'>{content}</pre>
                <Check loadingtext="memuat pnach" />
            </section>
        </>
    )
}

export function SourceCode(props) {
    return (
        <>
            <section className='w-[95%] mr-auto ml-auto text-white mt-5'>
                <h1 className='text-xl'><span className='text-yellow-300'>{props.text}</span></h1>
            </section>
        </>
    )
}

export function LinkSourceCode(props) {
    return (
        <>
            <section className='w-[95%] mr-auto ml-auto text-white text-lg'>
                <Link to={props.urlSumberKode} target='_blank' className='border-b-2 hover:border-blue-500'>{props.namaSumberKode} <img src={RedirectLink} alt="redirect link" className='w-8 inline pb-1' /> </Link>
            </section>
        </>
    )
}