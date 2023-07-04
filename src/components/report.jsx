import { Link } from 'react-router-dom'
import '../Global.css'
import Menu from './menu'

function report() {
    return (
        <>
            <section className="pt-14 pb-14 text-white  w-[90%] mr-auto ml-auto">
                <h1 className="text-center font-bold text-3xl">Laporkan / Request</h1>
                <form action="" method="GET" className="pt-16">
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
                            />
                        </div>
                        <div className="w-full pl-[2%] max-[639px]:pl-[0%] max-[639px]:mt-5">
                            {/* email */}
                            <label htmlFor="email" className="font-semibold">
                                Email :
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                                placeholder="Ketikkan email disini"
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
                            defaultValue={""}
                        />
                        {/* button kirim */}
                        <button
                            type="submit"
                            name="kirim"
                            className="w-full bg-[#1B74E4] rounded text-white h-10 text-2xl hover:bg-[#1063c8] max-[639px]:text-xl mt-5"
                        // onClick={}
                        >
                            Kirim
                        </button>
                    </div>
                </form>
                <Link className='mt-24 pt-1 pb-1 text-xl text-center bg-fuchsia-600 w-full uppercase rounded-[4px] select-none hover:bg-fuchsia-700 block' to={"/"}>Kembali ke beranda</Link>
                <Menu />
            </section>

        </>
    )
}

export default report