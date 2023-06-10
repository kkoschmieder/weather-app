import '../assets/styles/container.css'

function Container(props) {
    return (
        <div className={'container ' + props.className}>{props.children}</div>
    )
}

export default Container;