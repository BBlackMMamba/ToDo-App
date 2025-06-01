import { useState } from 'react';
import Titles from './Titles';
import Form from './Form';
import Counters from './Counters';
import Task_Wrapper from './Task_Wrapper';
function Card(){
    const [tasks, setTask] = useState([]);

    const addTask= (task) =>{
        setTask(prevState => [...prevState, task]);
    }

    const editTask = (id, newName) => {
        setTask(prevState => prevState.map(task => (task.id === id ? { ...task, name: newName } : task)));
      }

    const deleteTask = (id) => {
        setTask(prevState => prevState.filter(task => task.id !== id));
    }

    const toggleTask = (id) => {
        setTask(prevState => prevState.map(task => 
            (task.id === id ? { ...task, checked: !task.checked } : task)
        ));
    }

    return(
        <div className='card'>
            <Titles />
            <Form addTask={addTask}/>
            <Counters tasks={tasks} />
            {tasks && (<Task_Wrapper tasks ={tasks} deleteTask={deleteTask} editTask={editTask} toggleTask={toggleTask}/>)}
        </div>
    )
}



export default Card;