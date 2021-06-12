import { createSlice } from "@reduxjs/toolkit";

const sliceConfig = {
  name: "btnReducer",
  initialState: {
    displayedTaskStatus: 1,
    isLoaded: false,
    list: null,
    inputFilerValue: ""
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
      state.isLoaded = true;
    },
    setInputFilerValue: (state, action) => {
      state.inputFilerValue = action.payload;
    },
    toggleDelete: (state, action) => {
      const { list } = state;
      state.list = list.filter((item) => item.id !== action.payload);
    },
    toggleActive: (state, action) => {
      const { list } = state;
      state.list = list.map((item) => {
        const { id, isActive } = item;

        return {
          ...item,
          isActive: action.payload === id ? !isActive : isActive
        };
      });
    },
    toggleImportant: (state, action) => {
      const { list } = state;
      state.list = list.map((item) => {
        const { id, isImportant } = item;

        return {
          ...item,
          isImportant: action.payload === id ? !isImportant : isImportant
        };
      });
    },
    btnAdd: (state, action) => {
      const { list } = state;
      let date = Date.now();
      state.list = [
        ...list,
        {
          id: date,
          name: action.payload,
          isImportant: false,
          isActive: true
        }
      ];
    },
    filterBtn: (state, action) => {
      if (action.payload === "all") {
        state.displayedTaskStatus = 1;
      }
      if (action.payload === "active") {
        state.displayedTaskStatus = 2;
      }
      if (action.payload === "finish") {
        state.displayedTaskStatus = 3;
      }
    }
  }
};

export const { reducer, actions } = createSlice(sliceConfig);
