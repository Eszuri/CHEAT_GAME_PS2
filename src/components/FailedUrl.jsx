import '../local.css'

function FailedUrl() {
    return (
        <>
            <section className='flex justify-center items-center bg-slate-950 h-screen w-full'>
                <div className='block text-center'>
                    <h1 className='text-5xl text-center block font-semibold animate-bounce text-yellow-700'>404</h1>
                    <h2 className='text-white text-3xl text-center block font-medium pilih-text'>Page Not Found</h2>
                </div>
            </section>
        </>
    )
}

export default FailedUrl