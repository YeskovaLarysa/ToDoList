import React from "react";
import PropTypes from "prop-types";
import { BtnRemove, BtnImportant, BtnActive } from "./btn/Btn";

export const TastItem = ({ id, name, isActive, isImportant }) => {
  const style = {
    color: isImportant ? "red" : "#444",
    fontStyle: !isActive ? "italic" : "normal",
    textDecorationLine: !isActive ? "line-through" : "none",
    margin: "10px",
    width: "500px"
  };

  return (
    <div style={{ border: "2px solid green", margin: "10px" }}>
      <li style={style}>{name}</li>
      <BtnImportant id={id} />
      <BtnActive id={id} />
      <BtnRemove id={id} />
    </div>
  );
};

TastItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isImportant: PropTypes.bool.isRequired
};
