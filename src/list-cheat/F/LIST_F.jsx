import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_F() {
    useEffect(() => {
        if (componentF.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="F" />
            {componentF.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentF = [
    // { secret: "ListF-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListF-2", nama: <TersediaEnd url="" abjad="" /> },
]