import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    console.log("Component Did Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const userInfo = await data.json();
    console.log(userInfo);
    this.setState({ userInfo });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    console.log("Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="about-card">
        <img src={avatar_url} alt="img" />
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>ID: Nikitakesh@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;

/*********MOUNTING CYCLE*******************
 * Child Constructor
 * Child Render
 *
 *      <HTML Render(Dummy)>
 * componentDidMount
 *      <API Call Made>
 *      <this.setState> this triggers the reconciliation process and update cycle
 *
 * ********UPDATE CYCLE********************
 *      Render(API data)
 *      <HTML or actual dom update with new API Data>
 *componentDidUpdate
 *componentWillUnmount
 */
