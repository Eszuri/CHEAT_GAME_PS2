import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_Z() {
    useEffect(() => {
        if (componentZ.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="Z" />
            {componentZ.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentZ = [
    // { secret: "ListZ-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListZ-2", nama: <TersediaEnd url="" abjad="" /> },
]