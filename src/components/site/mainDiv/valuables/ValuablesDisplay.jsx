import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import ItemsList from "./ItemsList";
import APIURL from "../../../../helpers/environment"

const ValuablesDisplay = (props) => {
    const [valuables, setValuables] = useState([]);

    const fetchValuables = () => {
        fetch(`${APIURL}/valuables`, {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": props.token ? props.token : localStorage.getItem("token")
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

    const NoItems = () => {
        return (
            <div className="noItems">
                <h1>No valuables to display</h1>
                <p>Go to the Add Item page to start documenting important items!</p>
            </div>
        )
    }

    const HasItems = () => {
        return (
                <div className="itemContainer">
                    <h1>Your Valuables</h1>
                    <ItemsList valuables={valuables} fetchValuables={fetchValuables} token={props.token}/>
                </div>
        )
    }

    return (
        <div className="main">
            {valuables.length === 0 ? <NoItems /> : <HasItems />}
        </div>
    )
}
 
export default ValuablesDisplay;