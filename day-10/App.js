import React , {useState , useEffect} from "react";

function App(){
  const [users,setusers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
    .then(res => res.json())
    .then(data => setusers(data));
  }, []);

  return(
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} - {u.email}</li>  
        ))}
      </ul>
    </div>
  );
}

export default App;
