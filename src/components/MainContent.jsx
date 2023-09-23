import { Link } from 'react-router-dom';
import '../Global.css'
import Changelog from './Changelog';
function MainContent() {
    return (
        <>
            <section className='text-center text-white w-[70%] mr-auto ml-auto max-md:w-[90%]'>
                <Changelog />
                <Link to={'/list'} className='inline-block pt-1 pb-1 mt-10 text-xl bg-fuchsia-600 w-full uppercase rounded-md select-none hover:bg-fuchsia-700'>Buka Daftar Cheat PS2</Link>
            </section>
        </>
    )
}

export default MainContent