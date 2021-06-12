import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getList } from "./components/parts/list-getter";
import {
  TaskList,
  Title,
  FilrerInput,
  BtnFilterList,
  Loader,
  Form,
  ErrorBoundary
} from "./components";
import {
  setListDispatcher,
  setInputFilerValueDispatcher
} from "./store/dispatchers/btn-dispatchers";

import "./styles.css";

const filterList = (displayedTaskStatus, list, inputFilerValue) => {
  let newList;

  if (displayedTaskStatus === 1) {
    newList = list;
  }
  if (displayedTaskStatus === 2) {
    newList = list.filter((item) => item.isActive);
  }
  if (displayedTaskStatus === 3) {
    newList = list.filter((item) => !item.isActive);
  }

  if (inputFilerValue === "") {
    return newList;
  }
  return newList.filter((item) =>
    item.name.toLowerCase().includes(inputFilerValue.toLowerCase())
  );
};

export const App = () => {
  const { displayedTaskStatus, isLoaded, list, inputFilerValue } = useSelector(
    (store) => store.btnReducer
  );

  useEffect(() => {
    getList().then((data) => {
      setListDispatcher(data);
    });
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  const filteredList = filterList(displayedTaskStatus, list, inputFilerValue);

  const inputFilter = (e) => {
    setInputFilerValueDispatcher(e.target.value);
  };

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <Title />
        <Form />
        <FilrerInput
          inputFilter={inputFilter}
          inputFilerValue={inputFilerValue}
        />
        <BtnFilterList displayedTaskStatus={displayedTaskStatus} />
        <TaskList list={filteredList} />
      </div>
    </ErrorBoundary>
  );
};
