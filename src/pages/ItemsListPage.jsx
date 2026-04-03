import { use, useEffect, useState } from "react";
import EditableLabel from "../componets/EditableLabel";
import "../css/ItemsListPage.css"

function ItemListPage(){


  const fetch_data= async () => {
    const res = await fetch("http://127.0.0.1:8000/items");
    const data = await res.json();
    console.log(data)
    SetList(data)
  }


  const updateItemName = async (item_id,item_name) => {

    console.log(typeof item_id,typeof item_name);
    const response = await fetch("http://127.0.0.1:8000/items",{
      method:"POST",
      headers : {
        "content-type" : "application/json"
      },
      body:JSON.stringify({
        id : item_id,
        name: item_name
      })
    })

    const data = await response.json();           //just prints the status later should be modified to respond to user based on statuses
    console.log(data);
  }
  
  useEffect(()=>
    {
      // console.log("running");
      fetch_data();
      // updateItemName();
    },[])
    
    
    
    const [List,SetList]=useState([]);

  


  return(
    <div className="ItemList">
    <h1>Modify Item List</h1>
    {
      List.map((item)=> (<EditableLabel name={item.Name} id={item.Id} key={item.Id} onUpdate={updateItemName}/>))
    }
    </div>
  );
}


export default ItemListPage;