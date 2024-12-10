const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    taskTitle: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'in-progress', 'completed'], 
      default: 'pending' 
    },
    priority: { 
      type: String, 
      enum: ['low', 'medium', 'high'], 
      default: 'medium' 
    },
    dueDate: { type: Date, required: false },
    createdAt: { type: Date, default: Date.now }
  });

const TodoSchemaModel = mongoose.model('Todo', TodoSchema);
module.exports = TodoSchemaModel;