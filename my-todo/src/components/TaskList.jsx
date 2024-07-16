import React from "react";

const TaskList = ({ list }) => {

    return (
        <div className="list-container">
            <ul>
                {[...list.values()].map(task => (
                    <li key={task.id}>{task.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;