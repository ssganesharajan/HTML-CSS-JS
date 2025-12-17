import { useState } from "react";

function Likes(){
const [count,setcount]=useState(0)
    return(
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gp1RNYBckBs?si=iExWT0LCOoNP_VAv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>Likes:{count}</h1>
            <button id="b1" onClick={()=>setcount(count+1)}>Like 👍</button>
        </div>
    );
}

export default Likes;

//put file in src
// To add video click share and copy from embed video link
// ------------------------index.js-----------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Likes from './like';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Likes />

//   </React.StrictMode>
// );
// reportWebVitals();