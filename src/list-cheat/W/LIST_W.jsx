import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_W() {
    return (
        <>
            <PageHuruf abjad="W" />
            <Tersedia abjad="Warriors, The" url="/thewarriors" />
            <NotTersedia />
            <NotTersedia />
            <NotTersediaEnd />
        </>
    )
}