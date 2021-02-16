import React from 'react';
import { Table } from 'reactstrap';

const ItemsList = (props) => {
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
        <tr className="item">
          <th scope="row">1</th>
          <td>Stereo</td>
          <td>Electronics</td>
        </tr>
        <tr className="item">
          <th scope="row">2</th>
          <td>Grandma's Mink</td>
          <td>Furs</td>
        </tr>
        <tr className="item">
          <th scope="row">3</th>
          <td>Heart of the Ocean</td>
          <td>Jewelry</td>
        </tr>
        <tr className="item">
          <th scope="row">4</th>
          <td>Original Picasso</td>
          <td>Art</td>
        </tr>
        <tr className="item">
          <th scope="row">5</th>
          <td>Medieval Sword</td>
          <td>Antiques</td>
        </tr>
        <tr className="item">
          <th scope="row">6</th>
          <td>Nuclear Launch Codes</td>
          <td>Electronics</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ItemsList;
