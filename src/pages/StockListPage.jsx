import { useEffect, useState } from "react";
import StockLabel from "../componets/StockLabel.jsx"
import "../css/StockListPage.css"

function StockListPage(){

    const [List,SetList] = useState([]);

    const fetch_data= async () => {
    const res = await fetch("http://127.0.0.1:8000/stock");
    const data = await res.json();
    console.log(data)
    SetList(data)
  }


  useEffect(()=>{
    fetch_data();
  },[]);


    return(
        <div className="stock-page"> 
            <h1>Stock List</h1>
            <div className="StockList">
                {List.map((item)=>(<StockLabel key={item.id} itemid={item.id} name={item.name} quantity={item.quantity}/>))}
            </div>
        </div>
    );
}

export default StockListPage;