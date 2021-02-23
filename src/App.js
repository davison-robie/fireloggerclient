import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import Auth from "./components/auth/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "reactstrap";
import AddValuable from "./components/site/mainDiv/valuables/ItemAdd";
import ValuablesDisplay from "./components/site/mainDiv/valuables/ValuablesDisplay";


function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };
  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      ""
    ) : (
      <Auth updateToken={updateToken} />
    );
  };
  return (
    <div>
      
      <Router>
        <Header logout={clearToken} token={sessionToken} />
        {protectedViews()}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
