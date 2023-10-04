import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_O() {
    useEffect(() => {
        if (componentO.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="O" />
            {componentO.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentO = [
    // { secret: "ListO-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListO-2", nama: <TersediaEnd url="" abjad="" /> },
]