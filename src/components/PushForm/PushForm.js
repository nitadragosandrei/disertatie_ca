import React, { useState } from "react";
import {
  InputGroup,
  Form,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import "./PushForm.css";
import { useFormFields } from "../../libs/hooksLib";

function PushForm() {
  const [inputList, setInputList] = useState([{ valueName: "", value: "" }]);
  const [fields, handleFieldChange] = useFormFields({
    valueName: "",
    value: "",
  });
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
    setInputList([...inputList, { valueName: "", value: "" }]);
  };

  return (
    <div className="myForm">
      <h3>Insert your values</h3>
      {inputList.map((fields, i) => {
        return (
          <div className="box">
            <div class="d-flex justify-content-center">
              <form>
                <div class="form-group row">
                  <FormGroup controlId="email" bsSize="large">
                    <FormControl
                      className=".d-flex"
                      placeholder="Value Name"
                      name="valueName"
                      value={fields.valueName}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </FormGroup>

                  <FormGroup controlId="password" bsSize="large">
                    <FormControl
                      placeholder="Value"
                      className="ml10"
                      name="value"
                      value={fields.value}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </FormGroup>
                </div>
              </form>
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
      <Button className="butoane">Push to DB</Button>
    </div>
  );
}

export default PushForm;
