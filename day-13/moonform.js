// import React, {useState} from "react";
// function Moonform({onUserAdded}){
//     const [name, setName] = useState("");
//     const [gender, setGender] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if(!name || !gender) return;

//         try{
//             const res = await fetch("http://localhost:5000/users", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ name,gender })
//             });
//             const newUser = await res.json();
//             onUserAdded(newUser);
//             setName("");
//             setName("");
//         } catch (err) {
//             console.error("Error adding user:",err);
//         }
//     };
//     return(
//             <form onSubmit={handleSubmit}>
//             <input 
//             type="text"
//             placeholder="Enter your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)} />

//             <input type="text" placeholder="Enter your gender" value={gender} onChange={(e)=> setGender(e.target.value)}></input>
//             <button type="submit">ADD USER</button>
//             </form>
//     );
// }
// export default Moonform;


import React, { useState } from "react";

function Moonform({ onUserAdded }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [total, setTotal] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !gender) return;

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, gender,total })
      });


      setName("");
      setGender("");
      setTotal();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <center>
    <form onSubmit={handleSubmit} style={{background:"lightblue",width:"400px" , height:"200px",borderRadius:"10px"}}>
        <h1>Add user</h1>
        <table style={{margin:"10px"}}>
            <tr>
                <td>Name : </td>
        <td><input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /></td></tr>

      <tr>
        <td>Gender :</td>
        <td><select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select></td></tr>

      <tr>
        <td>Total:</td>
        <td><input
        type="number"
        placeholder="Enter your Total mark"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      /></td></tr>
      
      </table>

      <button type="submit" style={{background:"lightpink" ,color:"black" ,border:"none",borderRadius:"5px" ,boxShadow:"2px 2px 10px gray"}}>ADD USER</button>
    </form></center>
  );
}

export default Moonform;

//C:\Users\nidhi\Desktop\Moon\moonapp\src\moonform.js