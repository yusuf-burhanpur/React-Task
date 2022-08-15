import React from "react";
import AnswerType from "./AnswerType";
const QuestionType = ({ answer, id, deleteHandler, dataTypeHandler, inputData}) => {

// this component is basically filtering the output of list based on user selection
// i had use switch case to manage my output based on user selection

let answerType;
    switch (answer) {
        case "number": 
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" min="min" max="max" step="step"  />;
            break;
        case "textarea":
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" min="min" max="max" rows="rows" />;
            break;
        case "radio" :
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" />;
            break;
        case "checkbox" :
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" />;
            break;
        case "select" :
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" />;
            break;
        case "slider" :
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" min="min" max="max" />;
            break;
        case "text" :
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder" />;
            break;
        case "dropdown" :
            answerType = <AnswerType id={id} deleteHandler={deleteHandler} inputData={inputData} dataTypeHandler={dataTypeHandler} placeholder="placeholder"/>;
            break;
            default:
            break;
        }       
    return (
        <>
        {answerType}
        </>
    )
}

export default QuestionType;