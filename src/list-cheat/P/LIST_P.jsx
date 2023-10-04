import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_P() {
    useEffect(() => {
        if (componentP.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="P" />
            {componentP.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentP = [
    // { secret: "ListP-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListP-2", nama: <TersediaEnd url="" abjad="" /> },
]