/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";
import { Button, Modal, ModalFooter, Form, ModalHeader } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [buttonText, setButtonText] = useState("Already a User?");

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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setModal(false);
    } 
  }, []);

  return (
    <div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Modal isOpen={modal} >
          <ModalHeader toggle={toggle}>Welcome to Firelogger</ModalHeader>
          <div className="form-container">
            {showLogin == true ? (
              <Signup updateToken={props.updateToken} toggle={toggle} />
            ) : (
              <Login updateToken={props.updateToken} toggle={toggle} />
            )}

            <ModalFooter>
              <Button color="primary" onClick={handleClick}>
                {buttonText}
              </Button>{" "}
            </ModalFooter>
          </div>
        </Modal>
      </Form>
    </div>
  );
};

export default Auth;
