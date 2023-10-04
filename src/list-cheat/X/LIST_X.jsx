import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_X() {
    useEffect(() => {
        if (componentX.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="X" />
            {componentX.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentX = [
    // { secret: "ListX-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListX-2", nama: <TersediaEnd url="" abjad="" /> },
]