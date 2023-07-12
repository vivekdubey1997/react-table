import React, { useEffect, useState } from "react";
import UserData from "./component/UserData";
const API = "https://jsonplaceholder.typicode.com/users";

export const App = () => {
  const [user, setUser] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        setUser(data);
      }
    } catch (e) {
      console.error();
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th> 
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData user={user} />
      </tbody>
    </table>
  );
};

export default App;
