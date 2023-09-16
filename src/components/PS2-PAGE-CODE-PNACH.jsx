import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RedirectLink from "/src/images/redirect.svg"
import '../Global.css'
import '../local.css'
import { Check } from './Check';

export function BoilerplateRawPNACH(props) {
    const [content, setContent] = useState('');

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
                    <h1 className='bg-emerald-700 p-2 pl-3 pr-3 absolute rounded-md text-xl' id='copied'>berhasil tersalin</h1>
                    <h1 className='cursor-pointer absolute inline-block w-44 bg-slate-600 text-2xl rounded-md p-[6px] text-center hover:bg-slate-500 active:bg-slate-700' onClick={() => {
                        const textToCopy = document.getElementById("pnachKode").innerText;
                        navigator.clipboard.writeText(textToCopy)
                            .then(function () {
                                document.getElementById("copied").classList.add("kopi-muncul");
                            })
                            .catch(function () {
                                alert("gagal menyalin");
                            });
                        setTimeout(() => { document.getElementById("copied").classList.remove("kopi-muncul") }, 2300);
                    }}>Salin Kode</h1>
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
                <h1 className='text-xl'><span className='text-yellow-300'>Sumber Kode :</span> {props.catatan}</h1>
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