import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_M() {
    return (
        <>
            <PageHuruf abjad="M" />
            <Tersedia abjad="Metal Slug 3" url="/metalslug3" />
            <Tersedia abjad="Metal Slug 4 & 5 [Disc 1]" url="/metalslug4" />
            <Tersedia abjad="Metal Slug 4 & 5 [Disc 2]" url="/metalslug5" />
            <Tersedia abjad="Mortal Kombat - Shaolin Monks" url="/mksm" />
            <NotTersedia />
            <NotTersediaEnd />
        </>
    )
}