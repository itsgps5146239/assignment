import React from "react";

class EditUsers extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, designation } = props.location.state.Users;
    this.state = {
      id,
      name,
      email,
      designation,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""||this.state.designation === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateUsersHandler(this.state);
    this.setState({ name: "", email: "", designation:"" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Users</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })} //designation
            />
          </div>
          <div className="field">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="designation"
              value={this.state.designation}
              onChange={(e) => this.setState({ designation: e.target.value })} //
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditUsers;
