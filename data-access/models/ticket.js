const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String, required: true },
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);