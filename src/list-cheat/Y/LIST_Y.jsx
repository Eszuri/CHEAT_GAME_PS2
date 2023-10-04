import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_Y() {
    useEffect(() => {
        if (componentY.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="Y" />
            {componentY.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentY = [
    // { secret: "ListY-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListY-2", nama: <TersediaEnd url="" abjad="" /> },
]