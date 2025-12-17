function Eventcheck(){
    function handleclick(){
        alert("Button clicked")
    }

    function double(){
        document.writeln("Button clicked😊")
    }   
    
    //for emoji click window + .
    function mouseenter(){
        console.log("Button clicked😊")
    }

    function img(){
        document.getElementById("img1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgfKevYeZKFl8M3XGuhiVLHYFa3Dyd_nROq7NdhoUrrRpXefxbUVhLs_XqxAtocyChl2cHBfHOW3ZutGYfcTkILVXXDdn8G3_OxGTo70&s=10";
    }

    return (
        <div>
            <button onClick={handleclick}>single click</button>
            <button onDoubleClick={double}>Double click</button>
            <button onMouseEnter={mouseenter}>hover over</button>
            <button onCopy={handleclick}>on copy</button>
            <button onMouseLeave={handleclick}>mouse leave</button>
            <button onKeyDown={handleclick}>on KeyDown</button>
            <button onSubmit={handleclick}>on Submit</button>
            <button onCut={handleclick}>on cut</button>
            <button onPaste={handleclick}>on paste</button>
            <button onPointerMove={handleclick}>Move</button>
            <button onContextMenu={img}>right click</button><img id="img1"/>
        </div>
    )
};

export default Eventcheck;

//put file in src
// ------------------------index.js-----------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Eventcheck from './eventlistener';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Eventcheck />

//   </React.StrictMode>
// );
// reportWebVitals();