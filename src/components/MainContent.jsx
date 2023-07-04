import '../Global.css'
function MainContent() {
    function bukaMenu() {
        document.getElementById("bukaMenu").style.right = "0%";
        document.getElementById("ScrollAtasId").style.visibility = "visible";
    }
    return (
        <>
            <article className='text-center text-white w-[70%] mr-auto ml-auto max-md:w-[90%]'>
                <h1 className='uppercase font-semibold text-2xl underline decoration-green-600'>Cheat Playstation 2 yg gwe sediakan</h1>
                <p className='mt-20 text-xl'><span className='select-none text-green-500'>1.</span> Dengan kode patch / .pnach file</p>
                <p className='mt-10 text-xl'><span className='select-none text-green-500'>2.</span> Dengan controller Ps2 / Stik ps2</p>
                <button className='pt-1 pb-1 mt-10 text-xl bg-fuchsia-600 w-full uppercase rounded-md select-none hover:bg-fuchsia-700' onClick={bukaMenu}>Buka Daftar Cheat PS2</button>
            </article>
        </>
    )
}

export default MainContent