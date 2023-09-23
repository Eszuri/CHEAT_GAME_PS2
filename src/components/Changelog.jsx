import React from 'react'

export default function Changelog() {
    return (
        <>
            <div className='w-full bg-black p-2'>
                <h1 className='text-left text-2xl'>Log Perubahan {"(Changelog)"}</h1>
                <div className='mt-3 bg-stone-800 h-80 rounded'>
                    <Bola />
                </div>
            </div>
        </>
    )
}

export function Bola() {
    return (
        <>
            <span className='w-5 h-5 rounded-full bg-blue-600'></span>
        </>
    )
}