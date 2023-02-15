import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './Header';
import UserGrid from './UserGrid';



function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getUsers() {
    setIsLoading(true);

    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <div>
      <Header brandName="xyz app" getUsers={getUsers} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
}
export default App;