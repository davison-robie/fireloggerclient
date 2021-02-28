import React, { useState } from 'react';
import { 
    Button, 
    Form,
    FormText,
    FormGroup, 
    Label, 
    Input,
    InputGroup,
    InputGroupAddon,
    DropdownItem,
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter
} from 'reactstrap';

const ItemEdit = (props) => {
    const[editCategory, setEditCategory] = useState(props.valuable.category)
    const[editName, setEditName] = useState(props.valuable.name);
    const[editYear, setEditYear] = useState(props.valuable.year);
    const[editModel, setEditModel] = useState(props.valuable.model);
    const [editSerial_number, setEditSerial_Number] = useState(props.valuable.serial_number);
    const [editPhoto, setEditPhoto] = useState(props.valuable.photo);
    const [editDollar_value, setEditDollar_Value] = useState(props.valuable.dollar_value);

    const valuableUpdate = (event, valuable) => {
        event.preventDefault();
        fetch(`http://localhost:3000/valuables/update/${props.valuable.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                {valuables: {
                    category: editCategory,
                    name: editName, 
                    year: editYear, 
                    model: editModel,
                    serial_number: editSerial_number,
                    photo: editPhoto,
                    dollar_value: editDollar_value
                }}),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then((res) => {
            props.fetchValuables();
            props.editOff();
        })
    }

    const closeBtn = <button className="close" onClick={props.editOff}>&times;</button>;

    return (
        <Modal isOpen={true}>
            <ModalHeader close={closeBtn}>Update Item</ModalHeader>
            <ModalBody>
                <Form onSubmit={valuableUpdate}>
                <FormGroup>
                <DropdownItem header>Categories of Valuables</DropdownItem>
                <Input
                    type="select"
                    name="select"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
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
                    value={editName}
                    required
                    onChange={(e) => setEditName(e.target.value)}
                />
                </FormGroup>

                <FormGroup>
                <Label for="year">Year</Label>
                <Input
                    type="textarea"
                    name="year"
                    id="yearOfItem"
                    placeholder="Year"
                    value={editYear}
                    onChange={(e) => setEditYear(e.target.value)}
                />
                </FormGroup>

                <FormGroup>
                <Label for="year">Model</Label>
                <Input
                    type="textarea"
                    name="model"
                    id="model"
                    placeholder="Model"
                    value={editModel}
                    onChange={(e) => setEditModel(e.target.value)}
                />
                </FormGroup>

                <FormGroup>
                <Label for="year">Serial Number</Label>
                <Input
                    type="textarea"
                    name="serial"
                    id="serial"
                    placeholder="Serial Number"
                    value={editSerial_number}
                    onChange={(e) => setEditSerial_Number(e.target.value)}
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
                    value={props.valuable.dollar_value}
                    onChange={(e) => setEditDollar_Value(e.target.value)}
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
                <Button outline color="warning">Submit</Button>
            </FormGroup>
                <br />
                <br />
            </Form>  
            </ModalBody>
        </Modal>
    )
}

export default ItemEdit;