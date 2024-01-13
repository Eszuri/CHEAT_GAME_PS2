import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_D() {
    useEffect(() => {
        if (component.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="D" />
            {component.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

const component = [
    { secret: "ListD-1", nama: <Tersedia url="/defjam" abjad="Def Jam - Fight for NY" /> },
    { secret: "ListD-2", nama: <Tersedia url="/defjam-eu" abjad="Def Jam - Fight for NY (Europe)" /> },
    { secret: "ListD-3", nama: <Tersedia url="/digruma2" abjad="Digimon Rumble Arena 2" /> },
    { secret: "ListD-4", nama: <TersediaEnd url="/downhill-domination" abjad="Downhill Domination" /> },
]
export const componentD = component.length;