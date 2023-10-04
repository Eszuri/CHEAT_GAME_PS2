import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_S() {
    useEffect(() => {
        if (componentS.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="S" />
            {componentS.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentS = [
    // { secret: "ListS-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListS-2", nama: <TersediaEnd url="" abjad="" /> },
]