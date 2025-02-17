import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>
                    <strong>Due:</strong> {task.dueDate}
                </p>
                <p>
                    <strong>Priority:</strong> {task.priority}
                </p>
                <p>
                    <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
                </p>
            </div>
            <div className="task-actions">
                <button onClick={onToggle}>
                    {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                </button>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
