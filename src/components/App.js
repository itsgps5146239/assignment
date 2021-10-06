import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/users";
import "./App.css";
import Header from "./Header";
import AddUsers from "./AddUsers";
import UsersList from "./UsersList";
import UsersDetail from "./UsersDetail";
import EditUsers from "./EditUsers";

function App() {
  // const LOCAL_STORAGE_KEY = "Users";
  const [Users, setUsers] = useState([]);

  //RetrieveUsers
  const retrieveUsers = async () => {
    const response = await api.get("/Users");
    return response.data;
  };

  const addUsersHandler = async (Users) => {
    console.log(Users);
    const request = {
      id: uuid(),
      ...Users,
    };

    const response = await api.post("/Users", request);
    console.log(response);
    setUsers([...Users, response.data]);
  };

  const updateUsersHandler = async (Users) => {
    const response = await api.put(`/Users/${Users.id}`, Users);
    const { id } = response.data;
    setUsers(
      Users.map((Users) => {
        return Users.id === id ? { ...response.data } : Users;
      })
    );
  };

  const removeUsersHandler = async (id) => {
    await api.delete(`/Users/${id}`);
    const newUsersList = Users.filter((Users) => {
      return Users.id !== id;
    });

    setUsers(newUsersList);
  };

  useEffect(() => {
    // const retriveUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveUsers) setUsers(retriveUsers);
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };

    getAllUsers();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Users));
  }, [Users]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <UsersList
                {...props}
                Users={Users}
                getUsersId={removeUsersHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddUsers {...props} addUsersHandler={addUsersHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditUsers
                {...props}
                updateUsersHandler={updateUsersHandler}
              />
            )}
          />

          <Route path="/Users/:id" component={UsersDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
