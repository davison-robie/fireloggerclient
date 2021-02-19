import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import Auth from "./components/auth/Auth";
import{
  BrowserRouter as Router,
} from "react-router-dom";


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


  return (
    <div>
      <Auth updateToken={updateToken}/>
      <Router>
      <Header token={sessionToken}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
