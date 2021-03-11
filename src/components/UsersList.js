import React, { useEffect, useState } from "react";
import User from "./Users";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));

    console.log(users);
  }, []);

  return (
    <ol class="users">
      {users.map((user, index) => {
        return (
          <User
            index={index}
            name={user.name.first + " " + user.name.last}
            photo={user.picture.thumbnail}
            email={user.email}
            cell={user.cell}
            address={user.location.city + ", " + user.location.state}
            dob={user.dob.age}
            username={user.login.username}
            timezone={user.location.timezone.description}
          />
        );
      })}
    </ol>
  );
};

export default UsersList