import { useState } from 'react';

function Form({addTask}){
    const [task, setTask] = useState('');
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addTask({name: task, checked: false, id: Date.now()});
        setTask('');
    }
        
    return(
        <form className="input_Form" onSubmit={handleFormSubmit}>
            <input type="text" name="text_input" placeholder="Add a new task..." id={task} value={task} onInput={(e)=>setTask(e.target.value)} required autofocus maxLength={60}/>
            <button  className="add_btn" type='onSubmit'>Add Task</button>
        </form>
    )
}

export default Form;