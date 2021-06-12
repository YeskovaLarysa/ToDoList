import { store } from "../store";
import { actions } from "../reducers/btn-reducers";

const { dispatch } = store;
const {
  setList,
  setInputFilerValue,
  toggleDelete,
  toggleActive,
  toggleImportant,
  btnAdd,
  filterBtn
} = actions;

export const setListDispatcher = (list) => dispatch(setList(list));

export const setInputFilerValueDispatcher = (inputFilerValue) =>
  dispatch(setInputFilerValue(inputFilerValue));

export const toggleDeleteDispatcher = (inputId) =>
  dispatch(toggleDelete(inputId));

export const toggleActiveDispatcher = (inputId) =>
  dispatch(toggleActive(inputId));

export const toggleImportantDispatcher = (inputId) =>
  dispatch(toggleImportant(inputId));

export const btnAddDispatcher = (value) => dispatch(btnAdd(value));

export const filterBtnDispatcher = (filterType) =>
  dispatch(filterBtn(filterType));
