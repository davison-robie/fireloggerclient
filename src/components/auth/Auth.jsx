/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [buttonText, setButtonText] = useState("Already a User?")
  const toggle = () => setModal(!modal);

  function handleClick() {
    if (showLogin == true) {
      setShowLogin(false);
      setButtonText("New User?");
    } else {
      setShowLogin(true);
      setButtonText("Already a User?");
    }
  }

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button color="primary" onClick={toggle}>
          Logout
        </Button>
      </Form>
      <Modal isOpen={modal}>
        {showLogin == true ? (
          <Signup updateToken={props.updateToken} />
        ) : (
          <Login updateToken={props.updateToken} />
        )}

        <ModalFooter>
          <Button color="primary" onClick={handleClick}>{buttonText}
        </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Auth;