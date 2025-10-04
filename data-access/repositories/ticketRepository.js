const Ticket = require('../models/ticket');

async function createTicket(ticketdata) {
    const ticket = new Ticket(ticketdata);
    return ticket.save();
}

async function getAllTickets(filter = {}) {
    return Ticket.find(filter).sort({ date : -1 }).exec();
}

async function getTicketById(id) {
  return Ticket.findById(id).exec();
}

async function updateTicket(id, update) {
  return Ticket.findByIdAndUpdate(id, update, { new: true, runValidators: true }).exec();
}

async function deleteTicket(id) {
  return Ticket.findByIdAndDelete(id).exec();
}

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};