import React, { useState } from "react";
import { btnAddDispatcher } from "../../store/dispatchers/btn-dispatchers";
export const Form = () => {
  const [inputFormValue, setInputFormValue] = useState("");

  const disabled = (inputFormValue) => {
    if (inputFormValue === "") {
      return true;
    } else {
      return false;
    }
  };

  const inputAdd = (e) => {
    e.preventDefault();
    setInputFormValue(e.target.value);
  };

  console.log(inputFormValue);

  return (
    <form>
      <button
        disabled={disabled(inputFormValue)}
        type="button"
        style={{ margin: "10px" }}
        onClick={() => btnAddDispatcher(inputFormValue)}
      >
        Добавить задание:{" "}
      </button>
      <input value={inputFormValue} onChange={(e) => inputAdd(e)} />
    </form>
  );
};
