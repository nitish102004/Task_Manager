# Answers to Technical Questions

## 1. What technologies did you use for this project?

I built this task management application using **React.js** as the frontend framework. The project was bootstrapped with **Create React App**. For data persistence, the application uses the browser’s **localStorage**.

## 2. How do you manage the state in this application?

State is managed using React's **useState** hook for various data elements such as tasks, form inputs, and filter/search criteria. The **useEffect** hook is used both to initialize state from localStorage and to save data whenever the tasks state changes.

## 3. How is data persistence achieved in the application?

Data persistence is achieved by utilizing the browser's **localStorage**. When the app loads, tasks are retrieved from localStorage (if available). Whenever tasks are added, updated, or deleted, the changes are automatically saved back to localStorage.

## 4. How does the search and filtering functionality work?

The application maintains separate state variables for the search query, priority filter, and completion filter. Tasks are filtered based on:
- **Search Query:** Matching the query with the task's title or description.
- **Priority Filter:** Comparing the task's priority with the selected filter.
- **Completion Filter:** Checking the task's completed status against the selected filter criteria.

## 5. How did you ensure that the code is modular and maintainable?

The code is divided into multiple reusable components:
- **TaskForm:** For adding or editing tasks.
- **TaskList:** For displaying a list of tasks.
- **TaskItem:** For each individual task.
- **SearchFilter:** For filtering and searching tasks.
  
This modular design improves readability, reusability, and ease of maintenance.

## 6. What design considerations did you take into account?

The design emphasizes a clean, user-friendly interface with clear sections for upcoming, overdue, and completed tasks. The responsive layout and simple styling ensure that users can efficiently manage and navigate their tasks.
