import "../local.css"

function Succes_Alert(props) {
    return (
        <section className='fixed AnimationOpacity bg-green-500 inset-x-5 top-2 h-10 justify-center items-center rounded shadow-lg text-white text-2xl font-bold duration-500' style={{ display: "none" }}
            id='succes-alert'
        >
            <h1 className='font-[Taylor]'>{props.text}</h1>
        </section>
    )
}

export default Succes_Alert