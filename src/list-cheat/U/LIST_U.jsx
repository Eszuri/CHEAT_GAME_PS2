import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_U() {
    useEffect(() => {
        if (componentU.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="U" />
            {componentU.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentU = [
    // { secret: "ListU-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListU-2", nama: <TersediaEnd url="" abjad="" /> },
]