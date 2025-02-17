import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium');

    // Populate form fields when editing an existing task
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setDueDate(task.dueDate);
            setPriority(task.priority);
        } else {
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('Medium');
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !dueDate) {
            alert('Title and Due Date are required.');
            return;
        }
        const newTask = {
            id: task ? task.id : null,
            title,
            description,
            dueDate,
            priority,
            completed: task ? task.completed : false,
        };
        onSubmit(newTask);
        if (!task) {
            // Clear the form when adding a new task
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('Medium');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form-component">
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Due Date:</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="form-buttons">
                <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
                {task && (
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default TaskForm;
