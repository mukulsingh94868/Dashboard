import React, { useState, useEffect } from 'react';
import './todo.css';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../../../Network/Api';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';

const TodoComponent = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ search: '', status: 'All', priority: 'All' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        taskTitle: '',
        status: 'pending',
        priority: 'medium',
        dueDate: ''
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        const UserID = JSON.parse(localStorage.getItem('authId'));
        const getTodos = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchTodos(UserID);
                setTodos(data);
            } catch (err) {
                setError('Failed to fetch todos.');
            } finally {
                setLoading(false);
            }
        };

        getTodos();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter((todo) => todo._id !== id));
        } catch (err) {
            alert('Failed to delete task.');
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const createdTask = await addTodo(newTask);
            setTodos((prevTodos) => [...prevTodos, createdTask]);
            setNewTask({ taskTitle: '', status: 'pending', priority: 'medium', dueDate: '' });
            setIsModalOpen(false);
        } catch (err) {
            console.log('error', err);
            alert('Failed to add task.');
        }
    };

    const filteredTodos = todos.filter((todo) => {
        const matchesSearch = todo.taskTitle.toLowerCase().includes(filters.search.toLowerCase());
        const matchesStatus = filters.status === 'All' || todo.status === filters.status.toLowerCase();
        const matchesPriority = filters.priority === 'All' || todo.priority === filters.priority.toLowerCase();
        return matchesSearch && matchesStatus && matchesPriority;
    });
    
    return (
        <div className="app">
            <header>
                <div className="filter-container">
                    <select
                        onChange={(e) => setFilters((prev) => ({ ...prev, priority: e.target.value }))}
                        className="filter"
                    >
                        <option value="All">All Priorities</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <select
                        onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
                        className="filter"
                    >
                        <option value="All">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">InProgress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search task name"
                        onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                        className="search"
                    />
                    <button className="add-task" onClick={() => setIsModalOpen(true)}>
                        + Add Task
                    </button>
                </div>
            </header>

            {loading ? (
                <p>Loading tasks...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Assigned</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTodos.map((todo) => (
                            <tr key={todo._id}>
                                <td>{todo.taskTitle}</td>
                                <td>
                                    <img
                                        src="https://via.placeholder.com/30"
                                        alt="avatar"
                                        className="avatar"
                                    />
                                </td>
                                <td>{new Date(todo.dueDate).toLocaleDateString()}</td>
                                <td className={`status ${todo.status}`}>{todo.status}</td>
                                <td className={`priority ${todo.priority}`}>{todo.priority}</td>
                                <td>
                                    <button onClick={() => alert('Edit functionality here!')} className="edit">
                                        ✏️
                                    </button>
                                    <button
                                        onClick={() => handleDelete(todo._id)}
                                        className="delete"
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-content">
                        <h2>Add New Task</h2>
                        <form onSubmit={handleAddTask}>
                            <div className='mainTitle'>
                                <div className='titleTask'>
                                    <label>Task Title</label>
                                    <input
                                        type="text"
                                        value={newTask.taskTitle}
                                        onChange={(e) => setNewTask((prev) => ({ ...prev, taskTitle: e.target.value }))}
                                        required
                                    />
                                </div>

                                <div className='titleTask'>
                                    <label>Status</label>
                                    <select
                                        value={newTask.status}
                                        onChange={(e) => setNewTask((prev) => ({ ...prev, status: e.target.value }))}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">InProgress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mainTitle'> 
                                <div className='titleTask'>
                                    <label>Priority</label>
                                    <select
                                        value={newTask.priority}
                                        onChange={(e) => setNewTask((prev) => ({ ...prev, priority: e.target.value }))}
                                    >
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>

                                <div className='titleTask'>
                                    <label>Due Date</label>
                                    <input
                                        type="date"
                                        value={newTask.dueDate}
                                        onChange={(e) => setNewTask((prev) => ({ ...prev, dueDate: e.target.value }))}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="modalButtons">
                                <button type="button" className='closeBtn' onClick={() => setIsModalOpen(false)}>
                                    Close
                                </button>
                                <button type="submit" className='addTaskBtn'>Add Task</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default TodoComponent;
