import MainContent from "./components/MainContent";
import Menu from "./components/menu";
import Navbar from "./components/Navbar";
import './Global.css'
function home() {
    return (
        <>
            <Navbar />
            <Menu />
            <div className="mt-20">
                <MainContent />
            </div>
        </>
    )
}

export default home