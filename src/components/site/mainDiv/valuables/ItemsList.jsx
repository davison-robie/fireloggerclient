import React, { useState } from 'react';
import { Card, Table } from 'reactstrap';
import ItemInfoCard from "./ItemInfoCard";

const ItemsList = (props) => {
  const [oneValuable, setOneValuable] = useState([]);

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

  return (
    <div>
    <ItemInfoCard valuable={oneValuable}/>
    <Card className="displayContainer">
    <Table hover className="itemslist">
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.valuables.length != undefined ? valuablesMapper() : ""}
      </tbody>
    </Table>
    </Card>
    </div>
  );
}

export default ItemsList;
