import '../local.css'

function Maintenance() {
    return (
        <>
            <section className='fixed inset-x-0 inset-y-0 z-50 flex justify-center items-center w-full h-full' style={{ backgroundColor: "rgba(0, 0, 0, 0.93)" }}>
                <div className="terminal-loader scale-[2] max-[512px]:scale-[1.5]">
                    <div className="terminal-header">
                        <div className="terminal-title">Status</div>
                        <div className="terminal-controls">
                            <div className="control close" />
                            <div className="control minimize" />
                            <div className="control maximize" />
                        </div>
                    </div>
                    <div className="text">Maintenance ...</div>
                </div>
            </section>
        </>
    )
}

export default Maintenance