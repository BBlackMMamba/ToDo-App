
import Task from './Task';


function Task_Wrapper({tasks, deleteTask, editTask, toggleTask}){
    


    return(
        <div className="task_wrapper">
            {tasks.sort((a, b) => b.id - a.id).map(task=>(
                <Task 
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    toggleTask={toggleTask}
                />
            ))}
               
        </div>
    )
}

export default Task_Wrapper;