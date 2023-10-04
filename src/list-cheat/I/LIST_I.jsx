import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_I() {
    useEffect(() => {
        if (componentI.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="I" />
            {componentI.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentI = [
    // { secret: "ListI-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListI-2", nama: <TersediaEnd url="" abjad="" /> },
]