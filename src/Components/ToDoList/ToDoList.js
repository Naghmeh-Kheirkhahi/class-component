
import React, {useState} from "react";

function ToDoList() {

    const [task, setTask] = useState([]);

    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        setTask([...task, newTask]);
    }



    return (
        <>
            <h1>ToDoList</h1>
            <input type="text" placeholder="Enter a task" onChange={(e)=> setNewTask(e.target.value)}/>
            <button onClick={handleAddTask}>Add Task</button>
            
            <br/>
            <br/>

            {
                task.map((item) => {
                    return (
                        <div>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ToDoList;