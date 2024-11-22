import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/home-page";
import AboutUs from "./components/about-us";
import Products from "./components/products/";
import Login from "./components/login";
import Button from "ShellApplication/Button";

function App() {
  const [loginDetails, setLoginDetails] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("loginData"));
    if (localStorage.getItem("loginData")) {
      setLoginDetails(localStorage.getItem("loginData"));
    } else {
      setLoginDetails("");
    }
  }, [localStorage.getItem("loginData")]);

  return (
    <div className="h-screen flex flex-col">
      <Button />
      <Router>
        <Route exact path="/" component={Login} />
        <Switch>
          {loginDetails && (
            <>
              <Header />
              <div className="p-3  overflow-auto">
                <Route path="/home" component={HomePage} />

                <Route path="/about" component={AboutUs} />

                <Route Path="/products" component={Products} />
              </div>
              <Footer />
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
