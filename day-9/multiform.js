import { useState } from "react";

function Multiform(){
    const [form,setform] = useState({
        name:"",
        email:"",
        age:"",
    });

function handlechange(e){
    setform({
        ...form,
        [e.target.name]:e.target.value
    });
}
return(
    <div>
        <input name="name" value={form.name} onChange={(handlechange)}/>
        <input name="email" value={form.email} onChange={(handlechange)}/>
        <input name="age" value={form.age} onChange={(handlechange)}></input>

        <h3>{JSON.stringify(form)}</h3>
    </div>
);
}

export default Multiform;