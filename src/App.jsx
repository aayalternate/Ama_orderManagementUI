import { useState } from "react";
import EditableLabel from "./componets/EditableLabel";

function App(){

  const [Names,SetNames]=useState(["apple","mango","kiran","sl"]);

  function handleDelete(key){
    let mut=Names.filter((name)=> name !== key);
    SetNames(mut)
  }


  return(
    <div className="ItemList">
    {
      Names.map((item)=> (<EditableLabel name={item} key={item} delete={handleDelete}/>))
    }
    </div>
  );
}


export default App;