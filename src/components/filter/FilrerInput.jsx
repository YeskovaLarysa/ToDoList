import React from "react";
import { useSelector } from "react-redux";

export const FilrerInput = ({ inputFilter }) => {
  const { inputFilerValue } = useSelector((store) => store.btnReducer);

  if (inputFilerValue === "3") {
    throw new Error("s");
  }
  return (
    <form>
      <label style={{ margin: "10px" }}>Фильтр</label>
      <input value={inputFilerValue} onChange={(e) => inputFilter(e)} />
    </form>
  );
};
