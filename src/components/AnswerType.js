import React from "react";
import InputField from "./InputField";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const AnswerType = ({ placeholder, min, max, step, rows, id, deleteHandler, dataTypeHandler, inputData, key }) => {

// this component is used to manage the user input according to his selection
    // delete Handler for deleting answer type
    const onDeleteHandler = () => {
        deleteHandler(id)   
    }
    // for updating answer input data from input
    let dataType = inputData;
    const inputHandler = (name, value) => {
            dataType = {
            ...dataType,
            [name]: value,
        }
        for (let key in dataType) {
            if (dataType[key] === "") {
                delete dataType[key]
            }
        }
        dataTypeHandler(dataType)
    }
    
    
    let number = id + 1;
    return (
        <div className="answerTypes">
        <h6>Option {number}</h6>
        <Stack direction="row" spacing={1}>
        {placeholder && <InputField type="text" label="placeholder" title="placeholder" onChange={inputHandler} /> }
        {min && <InputField type="number" label="Min" title="min" onChange={inputHandler}/> }
        {max && <InputField type="number" label="Max" title="max" onChange={inputHandler}/> }
        {step && <InputField type="number" label="Step" title="step" onChange={inputHandler}/> }
        {rows && <InputField type="number" label="Rows" title="rows" onChange={inputHandler}/> }
        {number > 1 && <IconButton aria-label="delete" onClick={onDeleteHandler}> <DeleteIcon /> </IconButton>}
        </Stack>
        </div>
    )
}

export default AnswerType;