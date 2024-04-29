import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_N() {
    useEffect(() => {
        if (component.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="N" />
            {component.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

const component = [
    { secret: "ListN-1", nama: <Tersedia url="/nfs-undercover" abjad="Need for Speed - Undercover" /> },
    { secret: "ListN-2", nama: <TersediaEnd url="/nfs-underground" abjad="Need for Speed - Underground" /> },
]
export const componentN = component.length;