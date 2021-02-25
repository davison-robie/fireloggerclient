import React, { useState } from 'react';
import { Card, CardText, CardTitle, CardImg, Row, Col } from "reactstrap";

const ItemInfoCard = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Card className="itemInfoCard">
                    <Row>
                        <Col>
                            <CardTitle>Name: {props.valuable.name}</CardTitle>
                            <CardText>Category: {props.valuable.category}</CardText>
                            <CardText>Year: {props.valuable.year}</CardText>
                            <CardText>Model: {props.valuable.model}</CardText>
                            <CardText>Serial Number: {props.valuable.serial_number}</CardText>
                            <CardText>Dollar Value: {props.valuable.dollar_value}</CardText>
                        </Col>
                        <Col>
                            <CardImg src={props.valuable.photo}/>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
};

export default ItemInfoCard;