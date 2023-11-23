import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import ItemList from './components/itemList';
import Menu from './components/menu';
import { useState } from 'react';

function App() {


  const [DUMMY_DATA , setDUMMY_DATA] = useState([
    {
      model: 'komp1'
    },
    {
      model: 'komp2'
    },
    {
      model: 'komp3'
    },
  ])

  const saveInnerDataHandler = (e) => {
    setDUMMY_DATA((prevState) =>
    {return[...prevState , e]}
    )
  }

  const onDeleted = (e) => {
    setDUMMY_DATA(prev => {
      return prev.filter((it) => it.model !== e)
    })

  }
  

  return (
    <div>
      <ItemList data={DUMMY_DATA} onDeleted={onDeleted}/>
      <Menu onSaveInnerData={saveInnerDataHandler}/>
    </div>
  );
}

export default App;
