import { use, useEffect, useState } from "react";
import EditableLabel from "./componets/EditableLabel";

function App(){


  const fetch_data= async () => {
    const res = await fetch("http://127.0.0.1:8000/items");
    const data = await res.json();
    console.log(data)
    SetList(data)
  }
  
  useEffect(()=>
    {
      fetch_data();
    },[])
    
    
    
    const [List,SetList]=useState([]);

  


  return(
    <div className="ItemList">
    {
      List.map((item)=> (<EditableLabel name={item.Name} key={item.itemd}/>))
    }
    </div>
  );
}


export default App;