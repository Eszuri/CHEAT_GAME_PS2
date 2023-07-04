import '../Global.css'

function bukamenu() {
    function bukaMenu() {
        document.getElementById("bukaMenu").style.right = "0%";
        document.getElementById("ScrollAtasId").style.visibility = "visible";
    }
    return (
        <>
            <button className='text-white mt-1 text-xl bg-fuchsia-600 w-full uppercase rounded-md select-none hover:bg-fuchsia-700 pt-5 pb-5' onClick={bukaMenu}>Buka Daftar Cheat PS2</button>
        </>
    )
}

export default bukamenu