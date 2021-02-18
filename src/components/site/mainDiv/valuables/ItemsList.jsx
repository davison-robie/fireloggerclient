import React from 'react';
import { Table } from 'reactstrap';

const ItemsList = (props) => {
  const valuablesMapper = () => {
    return props.valueables.map((valuables, index) => {
        return (
            <tr key={index}>
                <th scope="row">{valuables.id}</th>
                <td>{valuables.name}</td>
                <td>category</td> 
            </tr>
        )
    })
}

  return (
    <Table hover className="itemslist">
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
       {valuablesMapper}
      </tbody>
    </Table>
  );
}

export default ItemsList;
