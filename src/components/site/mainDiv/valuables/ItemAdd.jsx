import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { Link } from "react-router-dom";

const AddValuable = (props) => {
  const [name, setName] = useState("ear buds");
  const [year, setYear] = useState("2020");
  const [model, setModel] = useState("1234");
  const [serial_number, setSerial_Number] = useState("1234");
  const [photo, setPhoto] = useState("string");
  const [dollar_value, setDollar_Value] = useState("100");
  const [category, setCategory] = useState("electronics");

  /*************MODAL HANDLING**************/
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => {
    if (modal) {
      setName('')
    }
    setModal(!modal)
  }
  const reload = () => window.location.reload();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/valuables/create", {
      method: "POST",
      body: JSON.stringify({
        valuables: {
          category: category,
          name: name,
          year: year,
          model: model,
          serial_number: serial_number,
          photo: photo,
          dollar_value: dollar_value,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token,
      }),
    })
      .then((res) => res.json())
      .then((valuablesData) => {
        toggle();
        setYear("");
        setModel("");
        setSerial_Number("");
        setPhoto("");
        setDollar_Value("");
        setCategory("");
        console.log(valuablesData);
      })
  };

  return (
    <div className="main">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="category">Categories of Valuables</Label>
          <Input
            type="select"
            name="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* <option></option> */}
            <option>Electronics</option>
            <option>Jewelry</option>
            <option>Furs</option>
            <option>Art</option>
            <option>Antiques</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="itemName">Name of Item</Label>
          <Input
            type="textarea"
            name="item"
            id="itemName"
            placeholder="Name of item"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="year">Year</Label>
          <Input
            type="textarea"
            name="year"
            id="yearOfItem"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="year">Model</Label>
          <Input
            type="textarea"
            name="model"
            id="model"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="year">Serial Number</Label>
          <Input
            type="textarea"
            name="serial"
            id="serial"
            placeholder="Serial Number"
            value={serial_number}
            onChange={(e) => setSerial_Number(e.target.value)}
          />
        </FormGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input
            placeholder="Amount"
            min={0}
            max={1000000}
            type="number"
            step="1"
            value={dollar_value}
            onChange={(e) => setDollar_Value(e.target.value)}
          />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>

        <br />
        <br />
        <FormGroup>
          <FormText color="secondary">
            <Label for="photoUrl">Photo of Insured's Valuable</Label>
            <Input type="file" name="photoUrl" id="exampleFile" />
            <br />A clear picture of the valuable the insured is inquiring to
            cover is required for claims record purposes.
          </FormText>
          <br />
          <br />
          <Button outline color="warning">
            Submit
          </Button>
        </FormGroup>
        <br />
        <br />
      </Form>

      {/**************MODAL DISPLAY***************/}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Success!</ModalHeader>
        <ModalBody>
        {/* {'Your valuable has been logged'} */}

          {'The following valuable has been logged:'}
          <br />
          <strong>
          {name}
          </strong>
          <br />
          {'What would you like to do next?'}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            <Link to="/yourvaluables" className="inactive">
              View Valuables
            </Link>
          </Button>
          <Button color="primary" onClick={reload}>
            Add Another
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

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