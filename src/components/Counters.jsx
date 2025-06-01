import { useState } from "react";

function Counters({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.checked).length;
    const pending = total - completed;



    return (
        <div className='counters'>
            <div className='counters_wrap'>
                <span>{total}</span>
                <p>Total Tasks</p>
            </div>
            <div className='counters_wrap'>
                <span>{completed}</span>
                <p>Completed</p>
            </div>
            <div className='counters_wrap'>
                <span>{pending}</span>
                <p>Pending</p>
            </div>
        </div>
    )
}

export default Counters;