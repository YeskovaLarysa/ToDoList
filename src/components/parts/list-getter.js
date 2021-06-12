export const getList = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Встретить рассвет",
          isImportant: false,
          isActive: true
        },
        {
          id: 2,
          name: "Выпить вино в хорошей компании",
          isImportant: true,
          isActive: true
        },
        {
          id: 3,
          name: "Сыграть в новую настолку с друзьями",
          isImportant: false,
          isActive: true
        },
        {
          id: 4,
          name: "съездить в новую страну",
          isImportant: true,
          isActive: true,
          displayedList: "active"
        },
        {
          id: 5,
          name: "выбросить все лишние вещи из квартиры",
          isImportant: false,
          isActive: true,
          displayedList: "active"
        },
        {
          id: 6,
          name: "сходить в поход",
          isImportant: false,
          isActive: true,
          displayedList: "active"
        },
        {
          id: 7,
          name: "покататься на велосипеде",
          isImportant: false,
          isActive: true,
          displayedList: "active"
        },
        {
          id: 8,
          name: "попрыгать на батуте",
          isImportant: false,
          isActive: true,
          displayedList: "active"
        },
        {
          id: 9,
          name: "прочитать 5 книг",
          isImportant: false,
          isActive: true,
          displayedList: "active"
        },
        {
          id: 10,
          name: "сменить работу",
          isImportant: false,
          isActive: true,
          displayedList: "active"
        }
      ]);
    }, 1000);
  });
