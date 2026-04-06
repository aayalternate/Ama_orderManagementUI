import { useState } from "react";
import "../css/StockLabel.css"

function StockLabel(props){
    const [text, setText] = useState(String(props.quantity));
    const [saved, setSaved] = useState(String(props.quantity));

    const Update = async(id)=>{
        if (text.length === 0){
            alert("no value in field")
            return
        }
        const res = await props.onUpdate(id,Number(text))

        if (res.ok){
            setSaved(text);
            const data = res.json()
            console.log(data)
        }
        else{
            alert("updation failed");
        }
    }

    return(
        <div>
            <div className="label">
                <p>{props.name}</p>
                <input 
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                { saved !== text && <button onClick={()=>{Update(props.itemid)}}>Save</button>}
            </div>
        </div>
    );
}

export default StockLabel;