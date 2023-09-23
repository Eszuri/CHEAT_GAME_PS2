import React from 'react'

export default function Changelog() {
    return (
        <>
            <div className='w-full bg-black p-2 text-left '>
                <h1 className='text-2xl'>Log Perubahan {"(Changelog)"}</h1>
                <BOXCHANGELOG date="2020" />
            </div >
        </>
    )
}

export function BOXCHANGELOG(props) {
    return (
        <>
            <span className='absolute w-5 inline-block h-5 rounded-full border-4 bg-black border-emerald-600'></span>
            <div className='bg-stone-800 border-l-2 ml-2'>
                <h1 className='ml-3'>{props.date}</h1>
                <div className='ml-5 mt-3'>
                    <h1 className='text-xl text-white underline decoration-yellow-600 decoration-[3px] font-bold'>Perubahan Web</h1>
                    <p>otw lg dibuat</p>
                </div>
            </div>
        </>
    )
}
