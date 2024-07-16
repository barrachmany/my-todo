import React from "react";

const TaskList = ({ list }) => {

    return (
        <div className="list-container">
            <ul>
                {[...list.values()].map(task => (
                    <li className="li-container" key={task.id}>
                        <div className="full-task-container">
                            <div className="li-container">
                                <div className="v-sign">
                                    <span >&#x2713;</span>
                                </div>
                                {task.value}
                            </div>
                            <div className="x-sign">
                                <span>&#x00D7;</span>
                            </div>

                        </div>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default TaskList;