import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_H() {
    useEffect(() => {
        if (component.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="H" />
            {component.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

const component = [
    // { secret: "ListH-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListH-2", nama: <TersediaEnd url="" abjad="" /> },
]
export const componentH = component.length;