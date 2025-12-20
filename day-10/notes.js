// Create new folder
//  open cmd
//  1.npx create-react-app clientserverapp(app name)
// necessary files will download in this location

//--------------------------------------------------------------------------------
// for server.js INSIDE SERVER FOLDER
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let user = [
//     { id : 1,name : "Nidhiesh",email : "nidhiesh@2006"},
//     {id : 2,name : "Thamizh" , email :"thamizh@2006"}
// ];

// app.get("/user",(req,res)=>{
//     res.json(user);
// });


// app.post("/user",(req,res) => {
//     const newUser = {id : Date.now(), ...req.body};
//     user.push(newUser);
//     res.json(newUser);
// })
// app.listen(5000, ()=>{
//     console.log("Server running on port 5000");
// });

// PS C:\Users\sdeep\OneDrive\Desktop\clPS C:\Users\sdeep\OneDrive\Desktop\clientserver\clientserverapp> cd server
// PS C:\Users\sdeep\OneDrive\Desktop\clientserver\clientserverapp\server> node server.js
// Server running on port 5000

//------------------------------------------------------------------------------------------
// for app.js INSIDE src folder 
// import React , {useState , useEffect} from "react";

// function App(){
//   const [users,setusers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/user")
//     .then(res => res.json())
//     .then(data => setusers(data));
    

//   }, []);

//   return(
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(u => (
//           <li key={u.id}>{u.name} - {u.email}</li>  
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// PS C:\Users\sdeep\OneDrive\Desktop\clientserver\clientserverapp\server> cd..
// PS C:\Users\sdeep\OneDrive\Desktop\clientserver\clientserverapp> npm start

// > clientserverapp@0.1.0 start
// > react-scripts start


// (node:16276) [DEP0176] DeprecationWarning: fs.F_OK is deprecated, use fs.constants.F_OK instead
// (Use `node --trace-deprecation ...` to show where the warning was created)
// (node:16276) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
// (node:16276) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
// Starting the development server...
// Compiled successfully!

// You can now view clientserverapp in the browser.

//   Local:            http://localhost:3000
//-----------------------------------------------------------------------------------------------

//postman app download to get and post like api usage from client to server