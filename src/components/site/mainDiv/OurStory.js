import React from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const OurStory = () => {
  return (
    <div className="ourstory">
      <img src="https://res.cloudinary.com/dqaf1fih0/image/upload/b_rgb:f7f7f7,bo_9px_solid_rgb:f7f7f7,c_scale,co_rgb:ffffff,e_auto_contrast,r_21,w_566/v1614711313/photos-BBP/house_fire_gslytk.jpg" class="img-fluid"/>

      <br />
      <br />
      <h1>Our Story</h1>
      <p>
        In 2007, a man named Hank Flowers experienced one of lifes hardest
        challenges when he got a call from the fire department that his house
        had caught fire while he was at work. The fire had claimed about half of
        his house and everything in it. Hank went through weeks of record
        keeping for every valuable in his house he could remember and days of
        research on the details to provide to his insurance company so they
        would payout. After months of delayed contact with the claims
        representative, Hank wondered why the information wasn't taken prior to the
        fire and how it could have been managed better. He later came up with an
        idea.
      </p>
      <p>
        His idea sprouted the application we know today as FireLogger.
        FireLogger was made to help not only the insurance company in resolving
        insureds' claims like Hank's in a timely manner but also to relieve the
        un-needed stress off the insured so they can focus on what matters most
        to them in an unpredicatble event.
      </p>

      <Button outline color="secondary">
        <Link to="/HanksStory" className="inactive">
          Read about our founder
        </Link>
      </Button>
    </div>
  );
};

export default OurStory;
