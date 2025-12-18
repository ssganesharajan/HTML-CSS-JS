import { useState } from "react";

function Form(){
    const [name,setname] = useState("");

    function handleSubmit(e){
        e.preventDefault();//stop page reload
        console.log("Submitted:",name);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e)=>setname(e.target.value)}/>

                <button type="submit">Submit</button>
        </form>
    );
}

export default Form;