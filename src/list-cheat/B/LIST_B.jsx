import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_B() {
    useEffect(() => {
        if (componentB.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="B" />
            {componentB.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentB = [
    // { secret: "ListB-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListB-2", nama: <TersediaEnd url="" abjad="" /> },
]