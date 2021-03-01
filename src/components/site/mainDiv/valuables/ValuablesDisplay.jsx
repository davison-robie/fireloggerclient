import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import ItemsList from "./ItemsList";
import ItemEdit from "./ItemEdit";

const ValuablesDisplay = (props) => {
    const [valuables, setValuables] = useState([]);

    const fetchValuables = () => {
        fetch("http://localhost:3000/valuables", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then((res) => res.json())
        .then((valuableData) => {
            setValuables(valuableData);
            console.log(props.token)
        })
    }

    useEffect(() => {
        fetchValuables();
    }, []);

    return (
        <div className="main">
            <div className="itemContainer">
                <h1>Your Valuables</h1>
                <ItemsList valuables={valuables} fetchValuables={fetchValuables} token={props.token}/>
            </div>
        </div>
    );
}
 
export default ValuablesDisplay;