import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import faunadb, { query as q } from 'faunadb';
import { Check } from './Check';

const client = new faunadb.Client({
    secret: import.meta.env.VITE_API_KEY
});
function report(props) {
    const [name, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [komentar, setKomentar] = useState('');
    const time = new Date();
        const perminggu = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
        const perbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let bulan = perbulan[time.getMonth()];
        let hari = perminggu[time.getDay()];
        let tanggal = time.getDate();
        let tahun = time.getFullYear();
        let jam = time.getHours();
        let menit = time.getMinutes();
        let detik = time.getSeconds();
        let allJam = hari + "," + tanggal + "-" + bulan + "-" + tahun + ',' + jam + "-" + menit + "-" + detik;
    // Kirim ke Fauna
    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('check').style.visibility = "visible";
        client.query(
            q.Create(
                q.Collection('Cheat-Ps2'),
                { data: {Waktu_Terkirim:allJam, Nama: name, Email: email, Komentar: komentar } }
            )
        )
            .then(function () {
                alert("TERKIRIM OK");
                document.getElementById('check').style.visibility = "hidden";
                document.getElementById("nama").value = "";
                document.getElementById("email").value = "";
                document.getElementById("komentar").value = "";
            })
            .catch(function () { alert("GAGAL TERKIRIM MEN"); document.getElementById('check').style.visibility = "hidden"; })
    };
    return (
        <>
            <Check loadingtext="mengecek" />
            <section className="pt-14 pb-14 text-white  w-[90%] mr-auto ml-auto">
                <h1 className="text-center font-bold text-3xl">{props.tittle}</h1>
                <form action="" onSubmit={handleSubmit} className="pt-16">
                    <div className="flex max-[639px]:block">
                        <div className="w-full pr-[2%] max-[639px]:pr-[0%]">
                            {/* nama */}
                            <label htmlFor="nama" className="font-semibold">
                                Nama :
                            </label>
                            <input
                                type="text"
                                name="nama"
                                id="nama"
                                className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                                placeholder="Ketikkan nama disini"
                                onChange={(e) => setNama(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full pl-[2%] max-[639px]:pl-[0%] max-[639px]:mt-5">
                            {/* email */}
                            <label htmlFor="email" className="font-semibold">
                                Email :
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                                placeholder="Ketikkan email disini"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Saran */}
                    <div className="mt-5 w-full">
                        <label htmlFor="komentar" className="font-semibold">
                            Saran atau Pendapat :
                        </label>
                        <textarea
                            name="saran"
                            id="komentar"
                            cols={30}
                            rows={10}
                            className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                            placeholder={props.placeholder}
                            spellCheck="true"
                            onChange={(e) => setKomentar(e.target.value)}
                            defaultValue={""}
                            required
                        />
                        {/* button kirim */}
                        <button
                            type="submit"
                            className="w-full bg-[#1B74E4] rounded text-white h-12 text-2xl hover:bg-[#1063c8] max-[639px]:text-xl mt-5"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </section>
            <PrevOrHome /><br />
        </>
    );
};

export default report;

export function PrevOrHome() {
    useEffect(() => {
        if (window.history.length == '1') {
            document.getElementById('backHistory').style.display = "none";
            document.getElementById('backHome').style.width = "100%";
        } else {
            document.getElementById('backHistory').style.display = "flex";
            document.getElementById('backHome').style.width = "50%";
        }
    })
    return (
        <>
            <div className='w-[90%] mr-auto ml-auto'>
                <div className='w-full flex mt-16 text-white'>
                    <h1 className='flex justify-center items-center mr-1 text-xl text-center h-14 align-bottom bg-fuchsia-600 w-1/2 uppercase rounded-[4px] select-none hover:bg-fuchsia-700 cursor-pointer' onClick={() => { window.history.back() }} id='backHistory'>Kembali ke Sebelumnya</h1>
                    <Link className='flex justify-center items-center ml-1 text-xl text-center h-14 bg-fuchsia-600 w-1/2 uppercase rounded-[4px] select-none hover:bg-fuchsia-700' to={"/"} id='backHome'>Kembali ke beranda</Link>
                </div>
            </div>
        </>
    )
}