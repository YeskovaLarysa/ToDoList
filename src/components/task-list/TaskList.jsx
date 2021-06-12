import React from "react";
import PropTypes from "prop-types";
import { TastItem } from "./task-item/TastItem";
import "./style.scss";

export const TaskList = ({ list = [] }) => {
  return (
    <ol className="rounded">
      {list.map((item) => (
        <TastItem key={item.id} {...item} />
      ))}
    </ol>
  );
};

TaskList.propTypes = {
  list: PropTypes.array.isRequired
};
