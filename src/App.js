import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import{
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
