import Item from "./item"

const ItemList = (props) => {
    const onDelete = (e) => {
        props.onDeleted(e)
      }

    return(
        <div>
            {props.data.map((item) => (
                <Item  model={item.model} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default ItemList