import React, { useEffect, useState } from "react";
import Moonform from './moonform'
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  
 return (<center>
    <div>
      <h1>User List</h1>

      {users.length === 0 ? (
        <p>No users yet</p>
      ) : (
        
        <table border="1" cellPadding="30px" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Moonform/>
    </div>
    </center>
  );

}
export default App;


//C:\Users\nidhi\Desktop\Moon\moonapp\src\App.js