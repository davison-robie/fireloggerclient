import React from "react";
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./mainDiv/Home";
import AboutUs from "./mainDiv/AboutUs";
import ValuablesDisplay from "./mainDiv/valuables/ValuablesDisplay";
import AddItem from "./mainDiv/valuables/ItemAdd";
import logo from "./mainDiv/assets/fireLoggerSafe.png";
import HanksStory from "./mainDiv/HanksStory";
import OurStory from "./mainDiv/OurStory";
import Auth from '../auth/Auth'


const Header = (props) => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/" className="brand">
          FireLogger<img src={logo} width="25px"></img>
        </NavbarBrand>
        <NavLink>
          <Link to="/yourvaluables" className="inactive">
            Your Valuables
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/account" className="inactive">
            Add Item
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/aboutus" className="inactive">
            About Us
          </Link>
        </NavLink>
        <Button outline color="warning" className="float-right" onClick={props.logout } href="/">        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            // fill-rule="evenodd"
            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
          />
          <path
            // fill-rule="evenodd"
            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg></Button>
      </Navbar>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/yourvaluables">
          {props.token ==false ? <Auth updateToken={props.updateToken}/> : <Redirect to="/yourvaluables" /> }
            <ValuablesDisplay token={props.token} logout={props.logout}/>
          </Route>
          <Route exact path="/account">
          {props.token ==false ? <Auth updateToken={props.updateToken} /> : <Redirect to="/account"/> }
            <AddItem token={props.token} />
          </Route>
          <Route exact path="/ourstory">
          <OurStory />
          </Route>
          <Route exact path="/hanksstory">
            <HanksStory />
          </Route>
        </Switch>
      </div>
    </header>
  );
};

export default Header;
