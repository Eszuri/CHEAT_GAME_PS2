import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_A() {
    useEffect(() => {
        if (component.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="A" />
            {component.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

const component = [
    // { secret: "ListA-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListA-2", nama: <TersediaEnd url="" abjad="" /> },
]
export const componentA = component.length;