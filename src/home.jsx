import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import './Global.css'
function home() {
    return (
        <>
            <Navbar />
            <div className="mt-20">
                <MainContent />
            </div>
        </>
    )
}

export default home