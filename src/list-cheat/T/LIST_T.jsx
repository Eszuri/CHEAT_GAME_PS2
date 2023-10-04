import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_T() {
    useEffect(() => {
        if (componentT.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="T" />
            {componentT.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentT = [
    { secret: "ListT-1", nama: <TersediaEnd abjad="Tekken 4" url="/tekken4" /> },
]