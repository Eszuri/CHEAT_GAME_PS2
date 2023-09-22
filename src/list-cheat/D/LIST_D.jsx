import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_D() {
    return (
        <>
            <PageHuruf abjad="D" />
            <Tersedia abjad="Def Jam - Fight for NY" url="/defjam" />
            <Tersedia abjad="Digimon Rumble Arena 2" url="/digruma2" />
            <NotTersedia />
            <NotTersedia />
            <NotTersediaEnd />
        </>
    )
}