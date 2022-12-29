import './styles.css'

interface headComponents {
    title: string,
    children: JSX.Element[]
}


function ElementsHead(props:headComponents) {
    return(
    <div className="emplocontrol-card">
        <h2 className="emplocontrol-title">{props.title}</h2>
        <div>
            {props.children[0]}
        </div>

        <div>
            {props.children[1]}
        </div>
    </div>
    )
}
export default ElementsHead