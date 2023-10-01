import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_T() {
    return (
        <>
            <PageHuruf abjad="T" />
            <Tersedia abjad="Tekken 4" url="/tekken4" />
            <NotTersedia />
            <NotTersedia />
            <NotTersediaEnd />
        </>
    )
}