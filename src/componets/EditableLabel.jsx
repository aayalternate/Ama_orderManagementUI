import { useState } from "react";
import "../css/EditableLabel.css"


function EditableLabel (props){

    const [EditMode,SetEditMode]=useState(false);
    const [Text,SetText]=useState(props.name);



    function handleCancel(){
        SetText(props.name);
        SetEditMode(false);

    }
    function handleSave(){
        if (Text.trim()==""){
            alert("name cannot be empty")
            return
        }
        SetEditMode(false);
        
    }
    function handleEdit(){
        SetEditMode(true);
    }

    






    return(
        <>
            {!EditMode ? (
                <div className="label">
                <span>{Text}</span>
                <div className="buttons">

                <button onClick={handleEdit}>Edit</button>
                </div>
                </div>
            ):(
                <div className="label">

                <input value={Text}
                    onChange={(e)=>SetText(e.target.value)}
                    />
                <div className="buttons">

                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={()=>props.delete(props.name)}>Delete</button>
                </div>
                </div>

            )}
        </>
    );
}

export default EditableLabel;