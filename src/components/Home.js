import React, { useState } from "react";
import InputField from './InputField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import QuestionType from './QuestionType';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';

// this is the home component where all the logic and states lies
const Home = () => {

// this state is used to manage the user input based on his selection
const [ansTypeInput, setAnsTypeInput] = useState({
    placeholder: "",
    min: "",
    max: "",
    rows: "",
    step: ""
})
// this state manages the button click to show the alert
const [buttonClick, setButtonClick] = useState(true)
// this state manages the array of list based on user selection
const [ansDataType, setAnsDataType] = useState([ansTypeInput]);
// this is the main state where we manage all the user input data
const [data, setData] = useState({
    questionTitle : "",
    questionDesc : "",
    questionType: "Answer Type",
    dataType: ansDataType,
});

// this input handler manages the input of question title & question description 
const inputHandler = (name, value) => {
    setData({
        ...data,
        [name]: value,
    })
}
// this submit handler manages the user data and prints in console.
// and reset the value to default
const submitHandler = (event) => {
    event.preventDefault();
    data.dataType.shift()
    setButtonClick(false)
    setTimeout(() => {
        setButtonClick(true)
    }, 3000)
    setData({
        questionTitle : "",
        questionDesc : "",
        questionType: "Answer Type",
        dataType: ansDataType,
    })
    setAnsDataType([ansTypeInput])
    setAnsTypeInput({
        placeholder: "",
        min: "",
        max: "",
        rows: "",
        step: ""
    })
    console.log(data)
}

// this addbuttonhandler manages the array...when user clicks the add button it adds new component
const addButtonHandler = () => {
    setAnsDataType(prevData => [...prevData, ansTypeInput])
}

// this deletebuttonhandler manages the array when user click on delete button it removes that component
const deleteHandler = (id) => {
    setAnsDataType(ansDataType.filter((item, index) => index !== id ))
    }

// this datatypehandler recieves the data from list component from user selection
const dataTypeHandler = (dataType) => {
    setAnsTypeInput(dataType)
}

// this selecthandler manages the selection of answertype
const selectHandler = (event) => {
    setData({
        ...data,
        questionType: event.target.value
    })
}

// this callback function calls whenever user clicks the button and it adds the input recieved from 
// user from list element
const dataHandler = () => {
    setData({
        ...data,
        dataType: [...ansDataType, ansTypeInput],
    })
}

    return (
        <div className='container form'>
        {buttonClick === false && <Alert severity="success">Your Response is Saved Successfully!</Alert>}
        <h2 className='heading'><ArrowBackIcon />  Add Question</h2>
        <form onSubmit={submitHandler}>
        <InputField 
          type="text"
          placeholder="Survey"
          label="Question Title"
          title="questionTitle"
          value={data.questionTitle}
          onChange={inputHandler}
          />
          <InputField 
          type="text"
          placeholder="Description"
          label="Question Description"
          title="questionDesc"
          value={data.questionDesc}
          onChange={inputHandler}
          />
          <select className="form-select" aria-label="Default select example" value={data.questionType} onChange={selectHandler} required>
            <option defaultValue="Answer Type">Answer Type</option>
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="number">Number</option>
            <option value="dropdown">Dropdown</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
            <option value="slider">Slider</option>
          </select>
          {data.questionType && ansDataType.map((item, index) => {
                return (<li className="listStyle" key={index}>
                <QuestionType id={index}  answer={data.questionType} deleteHandler={deleteHandler} dataTypeHandler={dataTypeHandler} inputData={ansTypeInput}/> 
                </li>)
          })}
          {data.questionType !== "Answer Type" && <IconButton className="addButton" onClick={addButtonHandler}> <AddCircleIcon /> </IconButton>}
          <button type="submit" className="btn btn-primary" onClick={dataHandler}>Submit</button>
        </form>
      </div>
    )
}

export default Home;