import { useState } from "react"

const Item = (props) => {
    const [style , setStyle] = useState(false)

    const styleHandler = () => {
        setStyle((prev) => !prev)
    }
    const deleteHandler = () => {
        props.onDelete(props.model)
    }

    return (
        <div >
            <h1 onClick={styleHandler} style={{textDecoration: style ? 'line-through' : 'none'}}>{props.model}</h1>
            <h2 onClick={deleteHandler} >X</h2>
        </div>
    )
}

export default Item