import React, { useState, useEffect } from 'react';
import './todo.css';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../../../Network/Api';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import moment from 'moment';

const TodoComponent = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ search: '', status: 'All', priority: 'All' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
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
            const res = await deleteTodo(id);
            if (res?.statusCode === 200) {
                toast.success(res?.message, {
                    duration: 4000,
                    position: 'top-right',
                });
                setTodos(todos.filter((todo) => todo._id !== id));
            }
        } catch (err) {
            alert('Failed to delete task.');
        }
    };

    const updateTodoList = (id) => {
        const taskToEdit = todos.find((todo) => todo._id === id);
        setEditingTask(taskToEdit);
        setIsModalOpen(true);
    };

    // const handleAddTask = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const createdTask = await addTodo(newTask);
    //         if (createdTask?.statusCode === 201) {
    //             toast.success(createdTask?.message, {
    //                 duration: 4000,
    //                 position: 'top-right',
    //             });
    //             setTodos((prevTodos) => [...prevTodos, createdTask]);
    //             setNewTask({ taskTitle: '', status: 'pending', priority: 'medium', dueDate: '' });
    //             setIsModalOpen(false);
    //         }
    //     } catch (err) {
    //         console.log('error', err);
    //         alert('Failed to add task.');
    //     }
    // };
    

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            if (editingTask) {
                const updatedTask = await updateTodo(editingTask._id, newTask);
                if (updatedTask?.statusCode === 200) {
                    toast.success(updatedTask?.message, {
                        duration: 4000,
                        position: 'top-right',
                    });
                    setTodos((prevTodos) =>
                        prevTodos.map((todo) => (todo._id === updatedTask._id ? updatedTask : todo))
                    );
                }
            } else {
                const createdTask = await addTodo(newTask);
                if (createdTask?.statusCode === 201) {
                    toast.success(createdTask?.message, {
                        duration: 4000,
                        position: 'top-right',
                    });
                    setTodos((prevTodos) => [...prevTodos, createdTask]);
                }
            }
            setNewTask({ taskTitle: '', status: 'pending', priority: 'medium', dueDate: '' });
            setEditingTask(null);
            setIsModalOpen(false);
        } catch (err) {
            console.log('Error', err);
            alert(`Failed to ${editingTask ? 'update' : 'add'} task.`);
        }
    };

    const filteredTodos = todos?.filter((todo) => {
        const matchesSearch = todo?.taskTitle?.toLowerCase()?.includes(filters?.search?.toLowerCase());
        const matchesStatus = filters?.status === 'All' || todo?.status === filters?.status?.toLowerCase();
        const matchesPriority = filters?.priority === 'All' || todo.priority === filters?.priority?.toLowerCase();
        return matchesSearch && matchesStatus && matchesPriority;
    });

    const colorData = (value) => {
        switch (value) {
            case 'pending':
                return 'statusPending';
            case 'in-progress':
                return 'statusInprogress';
            case 'completed':
                return 'statusCompleted';
            default:
                return '';
        }
    };

    const priorityData = (value) => {
        switch (value) {
            case 'low':
                return 'statusPending';
            case 'medium':
                return 'statusInprogress';
            case 'high':
                return 'statusHigh';
            default:
                return '';
        }
    };

    useEffect(() => {
        if (editingTask) {
            setNewTask({
                taskTitle: editingTask.taskTitle,
                status: editingTask.status,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate,
            });
        }
    }, [editingTask]);
    return (
        <div className="app1">
            <div className='mainFilter'>
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
                        className="searchBar"
                    />
                    <button className="add-task" onClick={() => setIsModalOpen(true)}>
                        + Add Task
                    </button>
                </div>
            </div>

            {loading ? (
                <p>Loading tasks...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Task Name</TableCell>
                                <TableCell align="right">Due Date</TableCell>
                                <TableCell align="right">Status&nbsp;</TableCell>
                                <TableCell align="right">Priority&nbsp;</TableCell>
                                <TableCell align="right">Action&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredTodos.map((row) => (
                                <TableRow
                                    key={row._id}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.taskTitle}
                                    </TableCell>
                                    <TableCell>{moment(row.dueDate).format('DD MMM YYYY')}</TableCell>
                                    <TableCell align="right"><p className={`${colorData(row?.status)} rowStatus`}>{row.status}</p></TableCell>
                                    <TableCell align="right"><p className={`${priorityData(row?.priority)} rowStatus`}>{row.priority}</p></TableCell>
                                    <TableCell align="right">
                                        <button onClick={() => updateTodoList(row?._id)} className="edit">
                                            <EditIcon className='editIcon' />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(row?._id)}
                                            className="delete"
                                        >
                                            <DeleteIcon className='deleteIcon' />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
                                <button type="submit" className='addTaskBtn'>{editingTask ? 'Update Task' : 'Add Task'}</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default TodoComponent;
