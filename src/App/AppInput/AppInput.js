import React, { useState } from "react";
import { Form } from "react-bootstrap";

const AppInput = () => {
  const [text, setText] = useState("");
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Write your favourite food</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter food"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default AppInput;
