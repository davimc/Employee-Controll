import './styles.css'

interface tbComponents {
    tbHead: Map<string, number>,
    children: JSX.Element[]
}

const priorityList = new Map<number, string>([
    [0,''],
    [1,"show576"],
    [2,"show992"]
])

function Table(props:tbComponents) {

    return (
        <table className="emplocontrol-table">
            <thead>
            <tr>
            {Array.from(props.tbHead).map(([key,priority]) => {
                return(
                    <th key={key} className={priorityList.get(priority)}>{key}</th>
                )
            })}
                <th className={priorityList.get(0)}>Visualizar</th>
            </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}
export default Table