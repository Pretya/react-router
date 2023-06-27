import React, { useState, useEffect } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users));
    }, []);
    return (
      <div>
        <h1>User List</h1>
        {users.map(user => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link to={`/albums/${user.id}`}>View Albums</Link>
          </div>
        ))}
      </div>
    );
  }

export default UserList;