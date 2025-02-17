import { useState, useEffect } from 'react';

const TaskForm = ({ task, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium'
    });

    // Initialize form with task data when editing
    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                priority: task.priority
            });
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            id: task?.id || Date.now()
        });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{task ? 'Edit Task' : 'New Task'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <label>
                        Title:
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </label>
                    {/* Add other fields similarly */}
                    <div className="form-actions">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;