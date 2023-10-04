import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_E() {
    useEffect(() => {
        if (componentE.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="E" />
            {componentE.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentE = [
    // { secret: "ListE-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListE-2", nama: <TersediaEnd url="" abjad="" /> },
]