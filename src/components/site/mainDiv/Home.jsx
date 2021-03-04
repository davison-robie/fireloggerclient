import React from 'react';
import {Jumbotron} from "reactstrap";
import logo from "../mainDiv/assets/fireLoggerSafe.png";

const Home = () => {
    return (
        <div className="main">
            <Jumbotron >
                <h1>FireLogger <img src={logo}></img></h1>
                <p>We keep track of your valuables so you can focus on what matters most.</p>
                <p>Do you remember everything in your house that you consider valuable? The date you aquired it, the monetary value, or even the serial or model number? </p>
                <p>Most people don't, so why should you? </p>
                <p>Let FireLogger do all the heavy lifting when it comes to preparing for the unexpected so that you can focus on what matters most to you. </p>
            </Jumbotron>
        </div>
    );
}
 
export default Home;