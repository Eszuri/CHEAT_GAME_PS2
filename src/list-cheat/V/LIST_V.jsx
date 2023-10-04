import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_V() {
    useEffect(() => {
        if (componentV.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="V" />
            {componentV.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentV = [
    // { secret: "ListV-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListV-2", nama: <TersediaEnd url="" abjad="" /> },
]