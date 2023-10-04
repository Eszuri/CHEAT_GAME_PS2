import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_R() {
    useEffect(() => {
        if (componentR.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="R" />
            {componentR.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentR = [
    { secret: "ListR-1", nama: <TersediaEnd abjad="Rumble Racing" url="/rumbleracing" /> },
]