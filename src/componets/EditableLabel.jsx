import { useState } from "react";
import "../css/EditableLabel.css"


function EditableLabel (props){

    const [EditMode,SetEditMode]=useState(false);
    const [Text,SetText]=useState(props.name);
    const [saved,SetSaved]=useState(props.name);



    function handleCancel(){
        SetEditMode(false);
    }
    function handleSave(){
        if (Text.trim()==""){
            alert("name cannot be empty")
            return
        }
        SetEditMode(false);
        SetSaved(Text);
        
    }
    function handleEdit(){
        SetText(saved);
        SetEditMode(true);
    }

    






    return(
        <>
            {!EditMode ? (
                <div className="label">
                <span>{saved}</span>
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