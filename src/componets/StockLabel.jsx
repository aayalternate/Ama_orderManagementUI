import { useState } from "react";
import "../css/StockLabel.css"

function StockLabel(props){
    const [text, setText] = useState(props.quantity);
    return(
        <div>
            <div className="label">
                <p>{props.name}</p>
                <input 
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                { text !== props.quantity && <button>Save</button>}
                {/* <button>Save</button> */}
            </div>
        </div>
    );
}

export default StockLabel;