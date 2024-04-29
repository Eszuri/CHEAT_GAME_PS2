import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NavbarTutorial } from "./Navbar"

function Tutorial() {

    function URL(props) {
        return (
            <>
                <Link to={props.url} className="underline underline-offset-4 hover:decoration-blue-700 duration-300">{props.title}</Link>
            </>
        )
    }
    return (
        <>
            <section className='text-white'>
                <NavbarTutorial>
                    <span>TUTORIAL</span>
                </NavbarTutorial>
                <h1 className="font-[Taylor] text-4xl text-center mt-5">Tutorial Cheat Engine</h1>
                <div className="grid gap-3 ml-5 mt-10 text-xl font-[Saira]">
                    {/* <URL url='/tutorial/create-pnach-code' title='1. Membuat kode patch/pnach' /> */}
                    <URL url='/tutorial/create-joker-command' title='1. Membuat Joker Command' />
                </div>
            </section>
        </>
    )
}

export default Tutorial