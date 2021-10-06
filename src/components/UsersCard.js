import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const UsersCard = (props) => {
  const { id, name, email,designation } = props.Users;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/Users/${id}`, state: { Users: props.Users } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
          <div>{designation}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { Users: props.Users } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default UsersCard;
