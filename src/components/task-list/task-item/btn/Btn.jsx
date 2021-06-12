import React from "react";
import PropTypes from "prop-types";
import {
  toggleDeleteDispatcher,
  toggleActiveDispatcher,
  toggleImportantDispatcher
} from "../../../../store/dispatchers/btn-dispatchers";
import "./style.scss";

export const BtnActive = ({ id }) => {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => toggleActiveDispatcher(id)}
    >
      Завершить задачу
    </button>
  );
};

export const BtnImportant = ({ id }) => {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => toggleImportantDispatcher(id)}
    >
      Сделать важной
    </button>
  );
};

export const BtnRemove = ({ id }) => {
  return (
    <button className="btn" onClick={() => toggleDeleteDispatcher(id)}>
      Удалить задачу
    </button>
  );
};

BtnActive.propTypes = {
  id: PropTypes.number.isRequired
};

BtnImportant.propTypes = {
  id: PropTypes.number.isRequired
};

BtnRemove.propTypes = {
  id: PropTypes.number.isRequired
};
