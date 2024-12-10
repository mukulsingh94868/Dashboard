const TodoSchemaModel = require("../models/todoModel");

module.exports.addTodo = async (req, res) => {
    const userId = res?.locals?.userId;
    const { taskTitle, status, priority, dueDate } = req.body;

    if (!userId || !taskTitle) {
        return res.status(400).json({ error: 'userId and taskTitle are required.' });
    }
    try {
        const newTodo = new TodoSchemaModel({
            userId,
            taskTitle,
            status: status || 'pending',
            priority: priority || 'medium',
            dueDate,
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create todo.' });
    }
};

module.exports.getTodoByFilter = async (req, res) => {
    const { status, priority } = req.query;

    const query = { userId: res?.locals?.userId };
    if (status) query.status = status;
    if (priority) query.priority = priority;

    try {
        const todos = await TodoSchemaModel.find(query);
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos.' });
    }
};

module.exports.getTodo = async (req, res) => {
    try {
        const todos = await TodoSchemaModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos.' });
    }
};

module.exports.updateTodo = async (req, res) => {
    const { taskTitle, status, priority, dueDate } = req.body;
    try {
        const updatedTodo = await TodoSchemaModel.findByIdAndUpdate(
            req.params.id,
            { taskTitle, status, priority, dueDate },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found.' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo.' });
    }
};

module.exports.deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await TodoSchemaModel.findByIdAndDelete(req.params.id);

        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found.' });
        }

        res.status(200).json({ message: 'Todo deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo.' });
    }
};