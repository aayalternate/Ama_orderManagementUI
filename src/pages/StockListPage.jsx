import { useEffect, useState } from "react";
import StockLabel from "../componets/StockLabel.jsx"
import "../css/StockListPage.css"

function StockListPage(){

    const [List,SetList] = useState([]);
    const [updateList,SetUpdateList] = useState([]);

    const fetch_data= async () => {
        const res = await fetch("http://127.0.0.1:8000/stock");
        const data = await res.json();
        console.log(data)
        SetList(data)
    }


    useEffect(()=>{
        fetch_data();

        return ()=>{
            console.log("page left");
        };
    },[]);

    const add_to_updates = async(itemid,new_quantity)=>{
        const res = await fetch("http://127.0.0.1:8000/stock",{
            method : "POST",
            headers : {
                "content-type":"application/json"
            }
            ,
            body : JSON.stringify({
                id :  itemid,
                quantity : new_quantity
            })
        });

        // const data = await res.json()

        return res

    }


    return(
        <div className="stock-page"> 
            <h1>Stock List</h1>
            <div className="StockList">
                {List.map((item)=>(<StockLabel key={item.id} itemid={item.id} name={item.name} quantity={item.quantity } onUpdate={add_to_updates} />))}
            </div>
        </div>
    );
}

export default StockListPage;