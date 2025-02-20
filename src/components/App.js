import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks]= useState(TASKS);

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(taskText){
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function getFilteredTasks() {
    if (selectedCategory === "All") {
      return tasks; // Show all tasks if "All" is selected
    } else {
      return tasks.filter((task) => task.category === selectedCategory);
    }}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
        />
      <NewTaskForm 
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
        />
      <TaskList tasks={getFilteredTasks()} onDelete={handleDelete} />
    </div>
  );
}

export default App;
