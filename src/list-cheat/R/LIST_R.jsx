import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_R() {
    return (
        <>
            <PageHuruf abjad="R" />
            <Tersedia abjad="Rumble Racing" url="/rumbleracing" />
            <NotTersedia />
            <NotTersedia />
            <NotTersediaEnd />
        </>
    )
}