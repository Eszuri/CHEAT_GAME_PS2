import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_L() {
    useEffect(() => {
        if (componentL.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="L" />
            {componentL.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentL = [
    // { secret: "ListL-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListL-2", nama: <TersediaEnd url="" abjad="" /> },
]