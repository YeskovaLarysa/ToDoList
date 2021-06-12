import React from "react";
import { BtnFilter } from "./btn-filter/BtnFilter";

export const BtnFilterList = ({ displayedTaskStatus }) => {
  const activeColor = "white";
  const mainColor = "rgb(136, 213, 248)";

  const styleAll = {
    backgroundColor: displayedTaskStatus === 1 ? activeColor : mainColor
  };

  const styleActive = {
    backgroundColor: displayedTaskStatus === 2 ? activeColor : mainColor
  };

  const styleFinish = {
    backgroundColor: displayedTaskStatus === 3 ? activeColor : mainColor
  };

  return (
    <div>
      <BtnFilter
        activeStyle={styleAll}
        filterType={"all"}
        name={"Все задачи"}
      />
      <BtnFilter
        activeStyle={styleActive}
        filterType={"active"}
        name={"Активные задачи"}
      />
      <BtnFilter
        activeStyle={styleFinish}
        filterType={"finish"}
        name={"Завершенные задачи"}
      />
    </div>
  );
};
