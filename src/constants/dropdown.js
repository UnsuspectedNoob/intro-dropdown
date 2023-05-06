import {
  calendar, todo, reminders, planning
} from "../assets/images";

const menuDrop = [
  {
    name: "Features",
    type: "objects",
    stuff: [
      {
        icon: todo,
        stuffName: "Todo List"
      },
      {
        icon: calendar,
        stuffName: "Calendar"
      },
      {
        icon: reminders,
        stuffName: "Reminders"
      },
      {
        icon: planning,
        stuffName: "Planning"
      }
    ]
  },
  {
    name: "Company",
    type: "strings",
    stuff: [
      {
        stuffName: "History"
      },
      {
        stuffName: "Our Team"
      },
      {
        stuffName: "Blog"
      }
    ]
  }
];

export {
  menuDrop
};