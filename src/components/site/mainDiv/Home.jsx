import React from 'react';
import {Jumbotron} from "reactstrap";
import logo from "../mainDiv/assets/fireLoggerSafe.png";

const Home = () => {
    return (
        <div className="main">
            <Jumbotron >
                <h1>FireLogger <img src={logo}></img></h1>
                <p>We keep track of your valuables so you can focus on what matters most.</p>
            </Jumbotron>
        </div>
    );
}
 
export default Home;