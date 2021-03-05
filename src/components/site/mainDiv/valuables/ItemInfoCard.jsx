import React, { useState } from 'react';
import { Card, CardText, CardTitle, CardImg, CardFooter, Button, CardGroup } from "reactstrap";
import APIURL from "../../../../helpers/environment"

const ItemInfoCard = (props) => {
    const deleteValuable = (valuable) => {
        fetch(`${APIURL}/valuables/delete/${valuable.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then(() => props.fetchValuables())  
    };

    return (
        <div className="main">
            <div className="mainDiv">
                <CardGroup className="infoDisplay">
                        <Card className="itemInfoCard">
                            <CardTitle tag="h5">Name: {props.valuable.name}</CardTitle>
                            <CardText>Category: {props.valuable.category}</CardText>
                            <CardText>Year: {props.valuable.year}</CardText>
                            <CardText>Model: {props.valuable.model}</CardText>
                            <CardText>Serial Number: {props.valuable.serial_number}</CardText>
                            <CardText>Dollar Value: {props.valuable.dollar_value}</CardText>
                        </Card>
                        <Card className="itemInfoCard">
                            <CardImg src={props.valuable.photo} size="cover"/>
                            <CardFooter>
                                <Button bottom width="67%" color="danger" onClick={() => {deleteValuable(props.valuable)}}>Delete</Button>
                                <Button color="warning" onClick={(e) => {
                                props.editUpdateValuable(props.valuable);
                                props.editOn()}}>Update</Button>
                            </CardFooter>
                        </Card>
                    </CardGroup>
            </div>
        </div>
    );
};

export default ItemInfoCard;