import React, { useState } from 'react';
import { Card, CardBody, Table, Container } from 'reactstrap';
import ItemInfoCard from "./ItemInfoCard";
import ItemEdit from "./ItemEdit";

const ItemsList = (props) => {
  const [oneValuable, setOneValuable] = useState([]);
  const [modal, setModal] = useState(false);
  const [valuableToUpdate, setValuableToUpdate] = useState({});

  const valuablesMapper = () => {
    return props.valuables.map((valuable, index) => {
        return (
            <tr className="tableRow" key={index} 
            onClick={(e) => {
              console.log(valuable);
              setOneValuable(valuable)
            }}>
                <th scope="row">{index + 1}</th>
                <td>{valuable.name}</td>
                <td>{valuable.category}</td>
            </tr>
        )
    })
}

const editUpdateValuable = (valuable) => {
  setValuableToUpdate(valuable);
}

const editOn = () => {
  setModal(true)
}

const editOff = () => {
  setModal(false);
}

  return (
    <Container className="mainValuableDiv">
      <ItemInfoCard valuable={oneValuable} editUpdateValuable={editUpdateValuable} editOn={editOn} fetchValuables={props.fetchValuables} token={props.token}/>
      <Card className="displayContainer">
        <Table hover className="itemsList">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody className="itemsListBody">
            {props.valuables.length != undefined ? valuablesMapper() : ""}
          </tbody>
        </Table>
      </Card>
      {modal ? <ItemEdit valuable={valuableToUpdate} editUpdateValuable={editUpdateValuable}
            editOff={editOff} token={props.token} fetchValuables={props.fetchValuables}/> : <></>}
    </Container>
  );
}

export default ItemsList;
