import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../../helpers/environment"

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/user/signup`, {
      method: "POST",
      body: JSON.stringify({user:{email: email, password: password}}),
      headers: new Headers({
        "Content-Type": "application/json",
      })
    }).then(
        (response) => response.json()
        ).then((data) => {
            console.log(data)
            props.updateToken(data.sessionToken)
            props.toggle();
      })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            minLength="5"
            name="password"
            value={password}
            type="password"
            required
          />
        </FormGroup>
        <Button type="submit" >Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;