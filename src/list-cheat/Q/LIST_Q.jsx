import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_Q() {
    useEffect(() => {
        if (componentQ.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="Q" />
            {componentQ.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentQ = [
    // { secret: "ListQ-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListQ-2", nama: <TersediaEnd url="" abjad="" /> },
]