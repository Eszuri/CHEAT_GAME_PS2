import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_C() {
    useEffect(() => {
        if (componentC.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="C" />
            {componentC.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentC = [
    // { secret: "ListC-1", nama: <Tersedia url="" abjad="" /> },
    // { secret: "ListC-2", nama: <TersediaEnd url="" abjad="" /> },
]