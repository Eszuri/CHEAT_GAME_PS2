import { useEffect, useState } from "react";
import "../Global.css"
import LogoDownload from "../images/logodownload.jpg"
import PnachLogo from "../images/pnachlogo.png"

function Ps2PageDownloadLink(props) {
    const [fileSize, setFileSize] = useState(null);

    // membaca ukuran file pnach
    useEffect(() => {
        const fileName = document.getElementById("namePnach").innerText;
        fetch(fileName)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Gagal membaca file ${fileName}`);
                }
                return response.text();
            })
            .then(data => {
                const fileSizeInBytes = data.length;
                const fileSizeInKB = fileSizeInBytes / 1024;
                setFileSize(fileSizeInKB.toFixed(2));
            })
            .catch(error => {
                console.error(error.message);
            });
    }, []);
    return (
        <>
            <section className="text-white w-[95%] me-auto ml-auto">
                <h1 className='font-medium text-xl border-b-2 border-green-600 inline-block mt-32'>Link Download .PNACH</h1>
                <p className='text-base font-semibold mt-5' id="namePnach">{props.namaFile}</p>
                <img src={PnachLogo} alt="pnach logo" className='w-24' />
                <p className='text-base font-semibold mt-5'>Size file : <span className='text-green-500'>{fileSize} KB</span></p>
                <a href={props.namaFile} download={props.namaFile} className="inline-block"><img src={LogoDownload} alt="Logo Download" className='w-36 mt-1 rounded cursor-pointer' /></a>
                <h1 className='text-center text-green-600 font-bold text-xl uppercase mt-20 mb-0'>terima kasih telah berkunjung</h1>
            </section>
        </>
    )
}

export default Ps2PageDownloadLink