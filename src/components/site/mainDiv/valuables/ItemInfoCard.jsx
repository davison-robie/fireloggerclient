import React, { useState } from 'react';
import { Card, } from "reactstrap";

const ItemInfoCard = (props) => {
    const [oneValuable, setOneValuable] = useState([]);
    
    const fetchOneValuable = () => {
        fetch(`http://localhost:3000/valuables/:${props.valuableToUpdate.id}`, {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then((res) => res.json())
        .then((oneValuableData) => {
            setOneValuable(oneValuableData);
        })
      }
      

    return (
        <div className="main">
            <div className="mainDiv">
                <Card className="card">
                    <p>heeeey</p>
                </Card>
            </div>
        </div>
    );
};

export default ItemInfoCard;