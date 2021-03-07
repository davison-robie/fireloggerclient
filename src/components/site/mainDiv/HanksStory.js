import React from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HanksStory = () => {
  return (
    <div className="hanksstory">
      <h1>About Hank</h1>

      <br />
      <br />
      <img src="https://res.cloudinary.com/dqaf1fih0/image/upload/bo_0px_solid_rgb:000000,c_scale,co_rgb:f7f7f7,e_vibrance:20,r_0,w_226/v1614707109/photos-BBP/Hank_Flowers_vnkxrh.jpg" />

      <br />
      <br />

      <p>
        {" "}
        Born in 1954, Hank Flowers grew up on a small town farm in Springfield,
        Illinois. He went to school for business and graduated in 1977 from UIS.
        He went on to create his own businesses but all four times failed. One
        day while at work he got a call from a neighbor that they had called the
        fire department because his house was on fire. Though it was a tragic
        experience, Hank came up with the idea of FireLogger. 
      </p>
      <Button outline color="secondary">
        <Link to="/OurStory" className="inactive">
          Go to Our Story
        </Link>
      </Button>
      <Button outline color="secondary">
        <Link to="/AboutUs" className="inactive">
          Go back to About Us
        </Link>
      </Button>

    </div>
  );
};

export default HanksStory;
