import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";
import { Link } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyCw-m1oiHFxe6Qw-TZAxEcomL5CLljejyM",
    authDomain: "cheatps2report.firebaseapp.com",
    databaseURL: "https://cheatps2report-default-rtdb.firebaseio.com",
    projectId: "cheatps2report",
    storageBucket: "cheatps2report.appspot.com",
    messagingSenderId: "266255138006",
    appId: "1:266255138006:web:2504b788f677aacda39d77",
    measurementId: "G-Q27EVX2Y9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function report() {
    const [name, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [komentar, setKomentar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kirim data ke database Firebase
        const newPostRef = push(ref(database, "Laporan"));
        const postId = newPostRef.key;
        const postData = {
            name: name,
            email: email,
            komentar: komentar
        };
        set(newPostRef, postData)
            .then(() => {
                // Reset form
                document.getElementById("nama").value = "";
                document.getElementById("email").value = "";
                document.getElementById("komentar").value = "";
                alert('Data berhasil terkirim!');
            })
            .catch((error) => {
                alert('Terjadi kesalahan saat mengirim data: ' + error.message);
            });
    };

    return (
        <div>
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
                            placeholder="Ketikkan Saran atau Pendapat anda disini"
                            spellCheck="true"
                            onChange={(e) => setKomentar(e.target.value)}
                            defaultValue={""}
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
        </div>
    );
}

export default report;
