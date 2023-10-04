import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_A() {
    useEffect(() => {
        if (componentA.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="A" />
            {componentA.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentA = [
    // { secret: "ListA-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListA-2", nama: <TersediaEnd url="" abjad="" /> },
]