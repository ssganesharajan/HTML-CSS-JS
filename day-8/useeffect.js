// //USE EFFECT:
// //after react render a component it will run side effects 

// NOTE:
// without dependency Array,effect runs after every render
// with [] effect runs only once after initial render
// see change by adding a state

import { useEffect } from "react";

function App(){
    useEffect(()=>{
        console.log("Useeffect ran");
    });//without dependency Array

    // useEffect(()=>{
    //     console.log("Useeffect ran");
    // },[]);  (with dependency Array)

    return(
        <div>
            <h2>Simple useEffect Demo</h2>
        </div>
    );
}

export default App;