import '../Global.css'
export function TextCarapakaikodedengancontoller() {
    return (
        <>
            <section className='text-white w-[95%] mr-auto ml-auto'>
                <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mb-3'>Kode / Cheat dengan contoller / stik ps2</h1>
            </section>
        </>
    )
}

export function TextCaraPakai(props) {
    return (
        <>
            <section className='text-white w-[95%] mr-auto ml-auto'>
                <p className='mt-2 text-base'>{props.usage}</p>
            </section >
        </>
    )
}
export function TextH1(props) {
    return (
        <>
            <section className='text-white w-[95%] mr-auto ml-auto'>
                <h1 className='text-justify text-xl font-semibold mt-5 text-yellow-300 inline-block border-b-2 mb-0'>{props.H1}</h1>
            </section>
        </>
    )
}
function Ps2PageControllerCode(props) {
    return (
        <>
            <section className='text-white w-[95%] mr-auto ml-auto'>
                <p className='text-[13px] font-semibold mt-3 text-white'><span className='text-blue-400 text-base font-bold'>{props.kode}</span> {props.Titlekode}</p>
            </section>
        </>
    )
}
export default Ps2PageControllerCode