import "../Global.css"
import LogoDownload from "../images/logodownload.jpg"
import PnachLogo from "../images/pnachlogo.png"

function Ps2PageDownloadLink(props) {
    return (
        <>
            <section className="text-white w-[95%] me-auto ml-auto">
                <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mt-32'>Link Download .PNACH</h1>
                <p className='text-base font-semibold mt-5'>{props.namaFile}</p>
                <img src={PnachLogo} alt="pnach logo" className='w-24' />
                <p className='text-base font-semibold mt-5'>Tanggal dibuat : <span className='text-green-500'>{props.dateFile}</span></p>
                <p className='text-base font-semibold'>Size file .pnach : <span className='text-green-500'>{props.sizeFile}</span></p>
                <a href={props.namaFile} download={props.namaFile} className="inline-block"><img src={LogoDownload} alt="Logo Download" className='w-36 mt-1 rounded cursor-pointer' /></a>
                <h1 className='text-center text-green-600 font-bold text-xl uppercase mt-20 mb-0'>terima kasih telah berkunjung</h1>
            </section>
        </>
    )
}

export default Ps2PageDownloadLink