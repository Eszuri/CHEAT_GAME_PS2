import '../Global.css'

export function Ps2Pagetitle(props) {
    return (
        <>
            <section className='text-white mt-20'>
                <h1 className='text-center text-3xl font-bold uppercase'>{props.judul}</h1>
                <div className='w-[95%] mr-auto ml-auto mt-16'>
                    {/* Deskripi */}
                    <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mb-3'>Deskripi Game</h1>
                    <p className='text-lg whitespace-nowrap overflow-auto'><span className='pr-[22px] text-green-500'>Judul</span> = {props.descJudul}</p>
                    <p className='text-lg whitespace-nowrap overflow-auto'><span className='pr-[21px] text-green-500'>Serial</span> = {props.descSerial}</p>
                    <p className='text-lg whitespace-nowrap overflow-auto'><span className='pr-[31px] text-green-500'>CRC</span> = {props.descCRC}</p>
                    <p className='text-lg whitespace-nowrap overflow-auto'><span className='pr-[8px]  text-green-500'>Region</span>  = {props.descRegion
                    }</p>
                </div>
            </section>
        </>
    )
}