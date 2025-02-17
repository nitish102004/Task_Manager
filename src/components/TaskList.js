import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
    if (tasks.length === 0) {
        return <p>No tasks available.</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={() => onEdit(task)}
                    onDelete={() => onDelete(task.id)}
                    onToggle={() => onToggle(task.id)}
                />
            ))}
        </ul>
    );
};

export default TaskList;
