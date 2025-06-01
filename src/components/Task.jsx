import { useState } from 'react';
function Task({task, deleteTask, editTask, toggleTask}){

    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckBoxChanged = (e) =>{
        setIsChecked(!isChecked);
        toggleTask(task.id);
    }

    const editedTask = ({editedTask}) => {
        const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
    }


    return(
        <div className="task">
            <div className="input_wrap">
            <input type="checkbox" checked={isChecked} name={task.name} id={task.id} onChange={handleCheckBoxChanged}/>
            <p className={isChecked ? "checked" : ""}>{task.name}</p>
            </div>
            <div className="btn_wrap">
            <button className={`edit_btn ${isChecked ? "checked" : ""}`} onClick={() => {const newName = window.prompt("Edit Task:", task.name); if (newName !== null && newName.trim() !== "") {editTask(task.id, newName)}}}>Edit</button>
            <button className={`delete_btn ${isChecked ? "checked" : ""}`} onClick={() => { if (window.confirm("Are you sure you want to delete this task?")) { deleteTask(task.id); } }}>Delete</button>

            </div>
        </div>
    )
}

export default Task;