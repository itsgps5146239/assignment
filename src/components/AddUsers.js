import React from "react";

class AddUsers extends React.Component {
  state = {
    name: "",
    email: "",
    designation: "",

  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" ||this.state.designation=== "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addUsersHandler(this.state);
    this.setState({ name: "", email: "", designation :"" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Users</h2>
        <form className="ui form" onSubmit={this.add}>
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
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="designation"
              value={this.state.designation}
              onChange={(e) => this.setState({ designation: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddUsers;
