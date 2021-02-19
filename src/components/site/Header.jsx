import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./mainDiv/Home";
import AboutUs from "./mainDiv/AboutUs";
import ValuablesDisplay from "./mainDiv/valuables/ValuablesDisplay";
import AddItem from "./mainDiv/valuables/ItemAdd";

const Header = (props) => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/" className="brand">FireLogger</NavbarBrand>
                <NavLink><Link to="/yourvaluables" className="inactive">Your Valuables</Link></NavLink>
                <NavLink><Link to="/account" className="inactive">Add Item</Link></NavLink>
                <NavLink><Link to="/aboutus" className="inactive">About Us</Link></NavLink>
            </Navbar>
            <div>
                <Switch>
                <Route exact path="/"><Home /></Route>
                    <Route exact path="/aboutus"><AboutUs /></Route>
                    <Route exact path="/yourvaluables"><ValuablesDisplay /></Route>
                    <Route exact path="/account"><AddItem token={props.token}/></Route>
                </Switch>
            </div>
        </header>
    );
};

export default Header;