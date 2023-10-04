import { NotTersedia, NotTersediaEnd, PageHuruf, Tersedia } from "../../components/ListGame";

export default function List_D() { const listItems = component.map(person => <div key={person.id}>{person.import}</div>); return <>{listItems}</>; }
const pageHuruf = [{ id: 0, import: <PageHuruf abjad="D" /> }]
const notTersedia = [{ id: 99999, import: <NotTersedia /> }, { id: 999999, import: <NotTersedia /> }, { id: 9999999, import: <NotTersediaEnd /> },]
// pemisah
const tersedia = [
    { id: 1, import: <Tersedia abjad="Def Jam - Fight for NY" url="/defjam" /> },
    { id: 2, import: <Tersedia abjad="Digimon Rumble Arena 2" url="/digruma2" /> },
]
const component = [...pageHuruf, ...tersedia, ...notTersedia];
export const jumlahTersediaD = tersedia.length;