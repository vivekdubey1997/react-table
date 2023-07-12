import React from "react";

export const UserData = ({ user }) => {
  return (
    <>
      {user.map((curUser) => {
        const { id, name, email,address } = curUser;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address.street}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
