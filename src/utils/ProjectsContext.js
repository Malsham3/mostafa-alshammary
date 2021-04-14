import React from "react";

const ProjectsContext = React.createContext({
  projectone: {
    name: "Employee Tracker",
    description: `View, add, remove employees, roles, departments from the command
        line.`,
    github: "https://github.com/Malsham3/employee-tracker",
  },
  projecttwo: {
    name: "Office Space",
    description: `CRM web application.`,
    github: "https://github.com/Malsham3/Office-Space",
  },
  projectthree: {
    name: "Budget Tracker",
    description: `Track your expenses online.. or offline!`,
    github: "https://github.com/Malsham3/budget-tracker",
  },
  projectfour: {
    name: "Workout Tracker",
    description: `Create a workout plan, add exercises (cardio or resistance) and track your progress.`,
    github: "https://github.com/Malsham3/workout-tracker",
  },
});

export default ProjectsContext;
