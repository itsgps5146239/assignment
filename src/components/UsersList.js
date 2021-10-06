import React from "react";
import { Link } from "react-router-dom";
import UsersCard from "./UsersCard";

const UsersList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getUsersId(id);
  };

  const renderUsersList = props.Users.map((Users) => {
    return (
      <UsersCard
        Users={Users}
        clickHander={deleteConactHandler}
        key={Users.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Users List
        <Link to="/add">
          <button className="ui button blue right">Add Users</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderUsersList}</div>
    </div>
  );
};

export default UsersList;
