import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_J() {
    useEffect(() => {
        if (componentJ.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="J" />
            {componentJ.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentJ = [
    // { secret: "ListJ-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListJ-2", nama: <TersediaEnd url="" abjad="" /> },
]