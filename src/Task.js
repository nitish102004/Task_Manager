const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
    return (
        <div className={`task ${task.priority.toLowerCase()}`}>
            <div className="task-header">
                <h3>{task.title}</h3>
                <span className="priority">{task.priority}</span>
            </div>
            <p>{task.description}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <div className="task-actions">
                <button onClick={() => onToggleComplete(task.id)}>
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Task;