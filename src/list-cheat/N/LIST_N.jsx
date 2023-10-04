import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_N() {
    useEffect(() => {
        if (componentN.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="N" />
            {componentN.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentN = [
    // { secret: "ListN-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListN-2", nama: <TersediaEnd url="" abjad="" /> },
]