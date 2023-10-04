import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_G() {
    useEffect(() => {
        if (componentG.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="G" />
            {componentG.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentG = [
    { secret: "ListG-1", nama: <Tersedia abjad="Ghost Rider" url="/ghostrider" /> },
    { secret: "ListG-2", nama: <Tersedia abjad="God Hand" url="/godhand" /> },
    { secret: "ListG-3", nama: <Tersedia abjad="God Of War" url="/godofwar" /> },
    { secret: "ListG-4", nama: <TersediaEnd abjad="God Of War II" url="/godofwar2" /> },
]