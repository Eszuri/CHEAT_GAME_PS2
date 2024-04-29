import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_T() {
    useEffect(() => {
        if (component.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="T" />
            {component.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

const component = [
    { secret: "ListT-1", nama: <Tersedia abjad="Tekken 4" url="/tekken4" /> },
    { secret: "ListT-2", nama: <Tersedia abjad="Twisted Metal - Black (NTSC - U) [SCUS-97101]" url="/twistedMetalblack97101" /> },
    { secret: "ListT-3", nama: <TersediaEnd abjad="Twisted Metal - Black (NTSC - U) [SCUS-97179]" url="/twistedMetalblack97179" /> },
]
export const componentT = component.length;