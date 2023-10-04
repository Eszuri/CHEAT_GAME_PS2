import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_D() {
    useEffect(() => {
        if (componentD.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="D" />
            {componentD.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentD = [
    { secret: "ListD-1", nama: <Tersedia url="/defjam" abjad="Def Jam - Fight for NY" /> },
    { secret: "ListD-2", nama: <TersediaEnd url="/digruma2" abjad="Digimon Rumble Arena 2" /> },
]