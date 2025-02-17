import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchFilter from './components/SearchFilter';
import './App.css';

function App() {
  // Initialize tasks from localStorage (if available)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [completionFilter, setCompletionFilter] = useState('All');

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false };
    setTasks([...tasks, newTask]);
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle completion status of a task
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on search and filter criteria
  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
    const matchesCompletion =
      completionFilter === 'All' ||
      (completionFilter === 'Completed' ? task.completed : !task.completed);

    return matchesSearch && matchesPriority && matchesCompletion;
  });

  // Separate tasks into categories for the dashboard
  const now = new Date();
  const upcomingTasks = filteredTasks.filter(task => !task.completed && new Date(task.dueDate) >= now);
  const overdueTasks = filteredTasks.filter(task => !task.completed && new Date(task.dueDate) < now);
  const completedTasks = filteredTasks.filter(task => task.completed);

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        completionFilter={completionFilter}
        setCompletionFilter={setCompletionFilter}
      />

      <div className="dashboard">
        <div className="task-section">
          <h2>Upcoming Tasks</h2>
          <TaskList
            tasks={upcomingTasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onToggle={toggleCompletion}
          />
        </div>
        <div className="task-section">
          <h2>Overdue Tasks</h2>
          <TaskList
            tasks={overdueTasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onToggle={toggleCompletion}
          />
        </div>
        <div className="task-section">
          <h2>Completed Tasks</h2>
          <TaskList
            tasks={completedTasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onToggle={toggleCompletion}
          />
        </div>
      </div>

      <div className="task-form">
        <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
        <TaskForm
          onSubmit={editingTask ? updateTask : addTask}
          task={editingTask}
          onCancel={() => setEditingTask(null)}
        />
      </div>
    </div>
  );
}

export default App;
