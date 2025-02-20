
import React ,{ useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  function handleSubmitForm(event){

    event.preventDefault();
    const newTask = {text: taskText , category: taskCategory};
    onTaskFormSubmit(newTask);
    setTaskText("");
    setTaskCategory(categories[0]);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmitForm}>
      <label htmlFor="task-details">Details</label>
        
        <input 
        id="task-details"
        type="text"  
        value={taskText}
        onChange = {(e) => setTaskText(e.target.value)} 
        />
      
      <label htmlFor="task-category">Category</label>
        Category
        <select 
            id ="task-category"
            value= {taskCategory}
            onChange = {(e) => setTaskCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) =>(
            <option key={category} value ={category}>
              {category}
            </option>
           ))
          }

        </select>
      
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
