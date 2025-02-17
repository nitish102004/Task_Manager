import Task from './Task';

const TaskList = ({ title, tasks, onEdit, onDelete, onToggleComplete }) => {
    return (
        <div className="task-list">
            <h2>{title} ({tasks.length})</h2>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </div>
    );
};

export default TaskList;