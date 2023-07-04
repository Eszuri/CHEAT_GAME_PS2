import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RedirectLink from "/src/images/redirect.svg"
import '../Global.css'
import '../local.css'

export function BoilerplateRawPNACH(props) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(props.urlFile)
            .then(response => response.text())
            .then(text => {
                setContent(text);
            })
            .catch(error => {
                console.error('gagal load file:', error);
            });
    }, []);
    return (
        <>
            <section className='w-[95%] mr-auto ml-auto text-white'>
                <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mt-32 mb-7'>Kode Raw Pnach</h1>
                <div className='flex mb-[37px]'>
                    <h1 className='cursor-pointer absolute z-[1] inline-block w-32 bg-slate-600 text-xl rounded-md p-1 text-center hover:bg-slate-500' onClick={() => {
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
                    <h1 className='bg-blue-600 p-2 pb-[3px] absolute rounded-md' id='copied'>Kode Tersalin</h1>
                </div>
                <pre className='text-green-400 bg-black rounded-lg pl-1 w-full text-sm whitespace-pre-wrap sm:text-xl' id='pnachKode'>{content}</pre>
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