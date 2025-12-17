function Eventcheck(){
    function handleClick(){
        alert("Button clicked")
    }

    function double(){
        document.writeln("Button clicked😊")
    }

    function mouseenter(){
        console.log("Button clicked😊")
    }

    function img(){
        document.getElementById("img1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgfKevYeZKFl8M3XGuhiVLHYFa3Dyd_nROq7NdhoUrrRpXefxbUVhLs_XqxAtocyChl2cHBfHOW3ZutGYfcTkILVXXDdn8G3_OxGTo70&s=10";
    }

    return (
        <div>
            <button id="b1" onClick={handleClick}>Click Me👍</button>
            <button id="b2" onDoubleClick={double}>Double click</button>
            <button id="b3" onMouseEnter={mouseenter}>Mouse enter</button>
            <button id="b4" onContextMenu={img}>right click</button><img id="img1"/>
        </div>
    )
};

//for emoji click window + .
export default Eventcheck;

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