import React from "react";

const InputField = ( { type, placeholder, label, title, onChange, value } ) => {

// this component is reusable component of Input field as this task contains more input field 
// this onChangeHandler function manage the user input from any component
    const onChangeHandler = (event) => {
       return onChange(event.target.name, event.target.value)
    }

    return (
        <div className="form-floating mb-3">
        <input type={type} className="form-control" id="floatingInput" placeholder={placeholder} value={value}  name={title} onChange={onChangeHandler} required/>
        <label htmlFor="floatingInput">{label}</label>
      </div>
    )
}

export default InputField;