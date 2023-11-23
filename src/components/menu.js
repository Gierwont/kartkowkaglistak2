import { useState } from "react"

const Menu = (props) => {
    const [inputModel , setInputModel] = useState('')
    const [newObject , setNewObject] = useState({
        model: ""
    })

    const textHandler = (e) =>{
        setNewObject((prevState) =>
        {return{
            ...prevState, model: e.target.value
        }})
    }
    const Clicked = () =>{
        props.onSaveInnerData(newObject)
    }

    return(
        <div>
            <input onChange={textHandler} type="text"/><br></br>
            <button onClick={Clicked}> Prześlij</button>
        </div>
    )
}

export default Menu