import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
class Control extends React.Component {
  constructor(props) {
    super(props);
    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
    this.state = {
      isLoggedIn: true,
      isLoggedOut: true
    };
  }
  Login() {
    this.setState({ isLoggedOut: !this.state.isLoggedOut });
  }
  Logout() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }
  render() {
    let buttonLogin, buttonLogout;

    if (this.state.isLoggedIn) {
      buttonLogin = <LoginButton onClick={this.Login} />;
    } else {
      buttonLogin = null;
    }

    if (this.state.isLoggedOut) {
      buttonLogout = <LogoutButton onClick={this.Logout} />;
    } else {
      buttonLogout = null;
    }
    
    return (
      <div align="center">
        {buttonLogin}
        {buttonLogout}
      </div>
    );
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Log in</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Log out</button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Control />, rootElement);


