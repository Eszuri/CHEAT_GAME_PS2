import { useEffect } from "react";
import { PageHuruf, Tersedia, TersediaEnd } from "../../components/ListGame";
export default function List_M() {
    useEffect(() => {
        if (componentM.length == 0) {
            document.getElementById('notTersedia').style.display = "block";
        } else {
            document.getElementById('notTersedia').style.display = "none";
        }
    })
    return (
        <>
            <PageHuruf abjad="M" />
            {componentM.map((items) => (<div key={items.secret}>{items.nama}</div>))}
        </>
    )
}

export const componentM = [
    { secret: "ListM-1", nama: <Tersedia abjad="Metal Slug 3" url="/metalslug3" /> },
    { secret: "ListM-2", nama: <Tersedia abjad="Metal Slug 4 & 5 [Disc 1]" url="/metalslug4" /> },
    { secret: "ListM-3", nama: <Tersedia abjad="Metal Slug 4 & 5 [Disc 2]" url="/metalslug5" /> },
    { secret: "ListM-4", nama: <Tersedia abjad="Metal Slug Anthology" url="/metalslug-anthology" /> },
    { secret: "ListM-5", nama: <TersediaEnd abjad="Mortal Kombat - Shaolin Monks" url="/mksm" /> },
]