import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import ItemsList from "./ItemsList";
import ItemInfoCard from "./ItemInfoCard";

const ValuablesDisplay = (props) => {
    const [valuables, setValuables] = useState([]);

    const fetchValuables = () => {
        fetch("http://localhost:3000/", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then((res) => res.json())
        .then((valuableData) => {
            setValuables(valuableData);
            console.log(valuableData);
        })
    }

    useEffect(() => {
        fetchValuables();
    }, []);

    return (
        <div className="main">
        <h1>Your Valuables</h1>
        <p>Lorem ipsum dolor sit afmet consectetur adipisicing elit. Iure mollitia itaque dolorum quam saepe nobis, a similique alias quidem libero veniam nesciunt odit rerum praesentium. Ratione provident excepturi ipsam ducimus.</p>
        <Container>
        <ItemsList valuables={valuables} fetchValuables={fetchValuables} token={props.token}/>
        <ItemInfoCard valuables={valuables}/>
        </Container>
        </div>
    );
}
 
export default ValuablesDisplay;