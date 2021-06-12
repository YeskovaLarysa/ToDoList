import React from "react";
import PropTypes from "prop-types";
import { filterBtnDispatcher } from "../../../store/dispatchers/btn-dispatchers";
import "./style.scss";

export const BtnFilter = ({ name, filterType, activeStyle }) => {
  return (
    <button
      style={activeStyle}
      className={"btnFilter"}
      onClick={() => filterBtnDispatcher(filterType)}
    >
      {name}
    </button>
  );
};

BtnFilter.propTypes = {
  name: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
  activeStyle: PropTypes.object.isRequired
};
