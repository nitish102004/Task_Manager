import React from 'react';

const SearchFilter = ({
    searchQuery,
    setSearchQuery,
    priorityFilter,
    setPriorityFilter,
    completionFilter,
    setCompletionFilter,
}) => {
    return (
        <div className="search-filter">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <select value={completionFilter} onChange={(e) => setCompletionFilter(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );
};

export default SearchFilter;
