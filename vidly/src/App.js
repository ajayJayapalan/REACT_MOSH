import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rental from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from "./common/protectedRoute";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            ></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
