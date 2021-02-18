import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon,DropdownItem} from 'reactstrap';

const AddValuable = (props) => {
  const [name, setName] = useState('');
  const [year, setYear]= useState('');
  const [model, setModel] = useState('');
  const [serial_number, setSerial_Number] = useState('');
  const [photo, setPhoto] = useState('');
  const [dollar_value, setDollar_Value] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3000/valuables/create', {
          method: 'POST',
          body: JSON.stringify({valuables: {category: category, name: name, year: year, model: model, serial_number: serial_number, photo: photo, dollar_value: dollar_value}}),
          headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': props.token
          })
      }) .then((res) => res.json())
      .then((valuablesData) => {
          console.log(valuablesData);
          setName('');
          setYear('');
          setModel('');
          setSerial_Number('');
          setPhoto('');
          setDollar_Value('');
          setCategory('');
          props.addVariable();
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
        <DropdownItem header>Categories of Valuables</DropdownItem>
        <Input type="select" name="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Electronics</option>
          <option>Jewelry</option>
          <option>Furs</option>
          <option>Art</option>
          <option>Antiques</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="itemName">Name of Item</Label>
        <Input type="textarea" name="item" id="itemName" placeholder="Name of item" value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="year">Year</Label>
        <Input type="textarea" name="year" id="yearOfItem" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="year">Model</Label>
        <Input type="textarea" name="model" id="model" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="year">Serial Number</Label>
        <Input type="textarea" name="serial" id="serial" placeholder="Serial Number" value={serial_number} onChange={(e) => setSerial_Number(e.target.value)}/>
      </FormGroup>

      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={1000000} type="number" step="1" value={dollar_value} onChange={(e) => setDollar_Value(e.target.value)} />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>

<br/>
<br/>
      <FormGroup>
      <FormText color="secondary">
        <Label for="photoUrl">Photo of Insured's Valuable</Label>
        <Input type="file" name="photoUrl" id="exampleFile" />
        <br />
          A clear picture of the valuable the insured is inquiring to cover is required for claims record purposes. 
        </FormText>
        <br/>
        <br/>
        <Button outline color="warning">Submit</Button>
      </FormGroup>
      <br />
      <br />
</Form>

  );
}

export default AddValuable;


      /*<FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    
    selection for multiple scroll options*/