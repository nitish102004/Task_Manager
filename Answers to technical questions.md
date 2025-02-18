## Developer Q&A

### 1. Time Spent
The coding test took approximately **5-8 hours** to complete, distributed across:
- Core functionality implementation: 3 hours
- UI/UX refinement: 1.5 hours
- Testing and debugging: 1 hour
- Documentation and final polish: 1.5 hours

### 2. Latest Language Feature Usage
For JavaScript (ES2023), the most useful feature is **Array.prototype.findLast**:
```jsx
const lastHighPriorityTask = tasks.findLast(task => task.priority === 'High');

### 3. How would you track down a performance issue in production? Have you ever had to do this?

1.Replicate with Chrome DevTools Performance tab
2.Analyze component re-renders with React Profiler
3.Check memory leaks via Heap Snapshots
4.Audit bundle size with Webpack Analyzer




### 4.If you had more time, what additional features or improvements would you consider adding to the task management application?

## Future Improvements

### 1. User Authentication System

**Implementation Strategy**:
```mermaid
graph TD
    A[Login/Register] --> B[Auth Provider]
    B -->|JWT| C[Backend API]
    C --> D[Database]
    D -->|User Data| C
    C -->|Token| B
    B -->|Protected Routes| E[Task Management]