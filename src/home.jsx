import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
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