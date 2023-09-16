import { useState } from 'react';
import { Link } from 'react-router-dom';
import faunadb, { query as q } from 'faunadb';
import { Check } from './Check';

const client = new faunadb.Client({
    secret: import.meta.env.VITE_API_KEY
});
function report() {
    const [name, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [komentar, setKomentar] = useState('');
    // Kirim ke Fauna
    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('check').style.visibility = "visible";
        client.query(
            q.Create(
                q.Collection('Cheat-Ps2'),
                { data: { Nama: name, Email: email, Komentar: komentar } }
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
                <h1 className="text-center font-bold text-3xl">Laporkan / Request</h1>
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
                            placeholder="Ketikkan laporan atau request anda disini"
                            spellCheck="true"
                            onChange={(e) => setKomentar(e.target.value)}
                            defaultValue={""}
                            required
                        />
                        {/* button kirim */}
                        <button
                            type="submit"
                            className="w-full bg-[#1B74E4] rounded text-white h-10 text-2xl hover:bg-[#1063c8] max-[639px]:text-xl mt-5"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
                <Link className='mt-24 pt-1 pb-1 text-xl text-center bg-fuchsia-600 w-full uppercase rounded-[4px] select-none hover:bg-fuchsia-700 block' to={"/"}>Kembali ke beranda</Link>
            </section>
        </>
    );
};

export default report;
