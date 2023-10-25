import { useState } from "react";
import { Link } from "react-router-dom";
import ps2logo from "../images/ps2logo.png"

function focus() {
    document.getElementById('listSearch').style.display = "block"
}

function notfocus() {
    setTimeout(() => {
        document.getElementById('listSearch').style.display = "none"
    }, 100);
}

export default function Search() {
    const link = "inline-block w-full";
    const ul = "fixed top-[52px] left-1/2 translate-x-[-50%] bg-[#444444] w-[70%] h-[50vh] overflow-y-auto p-1 hidden"
    const li = "text-2xl flex p-2 border-2 hover:border-emerald-400 mb-3 rounded"
    const img = "w-20"

    const [filter, setFilter] = useState("");
    const categories = [
        // D
        { url: "/defjam", judul: "Def Jam Fight - For NY", img: ps2logo },
        { url: "/defjam-eu", judul: "Def Jam Fight - For NY (Europe)", img: ps2logo },
        { url: "/digruma2", judul: "Digimon Rumble Arena 2", img: ps2logo },
        // G
        { url: "/godhand", judul: "God Hand", img: ps2logo },
        { url: "/ghostrider", judul: "Ghost Rider", img: ps2logo },
        { url: "/godofwar", judul: "God Of War", img: ps2logo },
        { url: "/godofwar2", judul: "God Of War II", img: ps2logo },
        // M
        { url: "/mksm", judul: "Mortal Kombat - Shaolin Monk", img: ps2logo },
        { url: "/metalslug3", judul: "Metal Slug 3", img: ps2logo },
        { url: "/metalslug4", judul: "Metal Slug 4&5 [Disc 1]", img: ps2logo },
        { url: "/metalslug5", judul: "Metal Slug 4&5 [Disc 2]", img: ps2logo },
        { url: "/metalslug-anthology", judul: "Metal Slug Anthology", img: ps2logo },
        // N
        { url: "/nfs-u", judul: "Need for Speed - Underground", img: ps2logo },
        // R
        { url: "/rumbleracing", judul: "Rumble Racing", img: ps2logo },
        // T
        { url: "/tekken4", judul: "Tekken 4", img: ps2logo },
        { url: "/twistedmetalblack97179", judul: "Twisted Metal - Black (NTSC - U) [SCUS-97179]", img: ps2logo },
        { url: "/twistedmetalblack97101", judul: "Twisted Metal - Black (NTSC - U) [SCUS-97101]", img: ps2logo },
        // W
        { url: "/thewarriors", judul: "Warriors, The", img: ps2logo },
    ];

    const handleInputChange = (e) => {
        setFilter(e.target.value.toUpperCase());
        if (document.getElementById('mySearch').value == 0) {
            document.getElementById('listSearch').style.display = "none"
            document.getElementById('deleteSearch').style.display = "none";
        } else {
            document.getElementById('listSearch').style.display = "block";
            document.getElementById('deleteSearch').style.display = "inline";
        }
    };

    return (
        <>
            <div className="flex">
                <input
                    type="search"
                    id="mySearch"
                    onInput={handleInputChange}
                    placeholder="Cari Cheat ..."
                    className="text-white p-1 bg-slate-700 border-2 rounded focus:border-2 focus:border-emerald-500 outline-none caret-red-600 font-sans w-96 max-sm:w-64 max-[500px]:w-28 placeholder:text-white placeholder:opacity-70 duration-100"
                />
                <span className="text-2xl cursor-pointer select-none hidden" id="deleteSearch" onClick={(event) => { document.getElementById('mySearch').value = ""; document.getElementById('listSearch').style.display = "none"; event.target.style.display = "none"; }}>🗑️</span>
            </div>
            <ul id="listSearch" className={ul}>
                {categories.map((category, index) => {
                    if (category.judul.toUpperCase().indexOf(filter) > -1) {
                        return (
                            <li key={index} className={li}>
                                <img src={category.img} alt="ps2 logo" className={img} />
                                <Link to={category.url} className={link}>{category.judul}</Link>
                                {/* <p className="absolute bg-black w-full right-0 bottom-0">Tidak Ada Data Lagi</p> */}
                            </li>
                        );
                    } else {
                        return null;
                    }
                })}
            </ul>
        </>
    );
}