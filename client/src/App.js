import React, { Fragment, useEffect } from "react";
import NavigationBar from "./components/shared/Nav";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Alert from "./components/shared/Alert";
import setAuthToken from "./state-management/utilities/setAuthToken";
import { Provider } from "react-redux";
import { loadUser } from "./state-management/actions/authorization";
import store from "./state-management/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
