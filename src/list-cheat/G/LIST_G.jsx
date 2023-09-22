import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_G() {
    return (
        <>
            <PageHuruf abjad="G" />
            <Tersedia abjad="Ghost Rider" url="/ghostrider" />
            <Tersedia abjad="God Hand" url="/godhand" />
            <Tersedia abjad="God Of War" url="/godofwar" />
            <Tersedia abjad="God Of War II" url="/godofwar2" />
            <NotTersedia />
            <NotTersedia />
            <NotTersediaEnd />
        </>
    )
}
