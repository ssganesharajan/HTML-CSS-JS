import React,{useEffect,useState} from 'react';

function App() {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return(
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (<p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <b>Name: </b>{user.name}<br/>
              <b>Gender: </b>{user.gender}<br/>
              <b>Total: </b>{user.total}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;