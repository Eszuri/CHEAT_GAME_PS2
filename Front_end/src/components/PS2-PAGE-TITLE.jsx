

export function Ps2Pagetitle(props) {
    return (
        <>
            <section className='text-white mt-20'>
                <h1 className='text-center text-3xl font-bold uppercase'>{props.judul}</h1>
                <div className='w-[95%] mr-auto ml-auto mt-16'>
                    {/* Deskripi */}
                    <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mb-3'>Deskripi Game</h1>
                    <div className='flex'>
                        <div className='flex justify-between w-[90px] mr-1'>
                            <span className='text-green-500 text-lg'>Judul</span>
                            <span className='text-white text-xl'>=</span>
                        </div>
                        <p className='text-lg whitespace-nowrap overflow-auto'>{props.descJudul}</p>
                    </div>

                    <div className='flex'>
                        <div className='flex justify-between w-[90px] mr-1'>
                            <span className='text-green-500 text-lg'>Serial</span>
                            <span className='text-white text-xl'>=</span>
                        </div>
                        <p className='text-lg whitespace-nowrap overflow-auto'>{props.descSerial}</p>
                    </div>

                    <div className='flex'>
                        <div className='flex justify-between w-[90px] mr-1'>
                            <span className='text-green-500 text-lg'>CRC</span>
                            <span className='text-white text-xl'>=</span>
                        </div>
                        <p className='text-lg whitespace-nowrap overflow-auto'>{props.descCRC}</p>
                    </div>

                    <div className='flex'>
                        <div className='flex justify-between w-[90px] mr-1'>
                            <span className='text-green-500 text-lg'>Region</span>
                            <span className='text-white text-xl'>=</span>
                        </div>
                        <p className='text-lg whitespace-nowrap overflow-auto'>{props.descRegion}</p>
                    </div>
                </div>
            </section>
        </>
    )
}