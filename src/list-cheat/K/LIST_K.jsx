import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_K() {
    useEffect(() => {
        if (componentK.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="K" />
            {componentK.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentK = [
    // { secret: "ListK-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListK-2", nama: <TersediaEnd url="" abjad="" /> },
]