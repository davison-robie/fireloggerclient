import React, {useState} from 'react';
import {Link } from "react-router-dom";
import { 
    Button, 
    Jumbotron
} from 'reactstrap'

const AboutUs = () => {
  
        return (
            <div className="aboutus">
            <h1>About Us</h1>
            <img src ="https://res.cloudinary.com/dqaf1fih0/image/upload/v1614706728/photos-BBP/happypic_p5aa42.jpg" class="img-fluid"/>
            <br/>
            <Jumbotron>
              <h1 className="display-3">FireLogger as a Tool</h1>
              <p className="lead">FireLogger is a useful tool for both parties in an event of a house claim.</p>
              <hr className="my-2" />
              <p>Keep track of your valuable belongings before life happens. See how we came about as an application.</p>
              <p className="lead">
              <Button color="warning">
            <Link to="/OurStory" className="inactive">
             Our Story
            </Link>
          </Button>
              </p>
            </Jumbotron>
            <Jumbotron>
              <h1 className="display-3">Our Founder</h1>
              <p className="lead">In 2007, Hank Flowers founded Firelogger.</p>
              <hr className="my-2" />
              <p>A humble man from Illinois had a house fire while at work. Click below to read about his tramatic experience that led to a well-known application we know today.</p>
              <p className="lead">
              <Button color="warning">
              <Link to="/HanksStory" className="inactive">
             About Hank
            </Link>
          </Button>
               </p>
            </Jumbotron>






          </div>
        );
      };
      
 
export default AboutUs;