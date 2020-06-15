import React, { useState } from "react";
import { InputGroup, Form, Row, Col, Button } from "react-bootstrap";
import "./PushForm.css";
function PushForm() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="myForm">
      <h3>Insert your values</h3>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <div class="d-flex justify-content-center">
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control
                      className=".d-flex"
                      placeholder="Value Name"
                      name="Name"
                      value={x.firstName}
                      onChange={(e) => handleInputChange(e, i)}
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Value"
                      className="ml10"
                      name="Value"
                      value={x.lastName}
                      onChange={(e) => handleInputChange(e, i)}
                    ></Form.Control>
                  </Col>
                </Form.Row>
              </Form>
            </div>
            <div className=".d-flex">
              {inputList.length !== 1 && (
                <Button
                  size="sm"
                  className="mr10"
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove
                </Button>
              )}
              {inputList.length - 1 === i && (
                <Button className="butoane" size="sm" onClick={handleAddClick}>
                  Add
                </Button>
              )}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default PushForm;
