const repo = require('../../data-access/repositories/ticketRepository');

async function getAllTickets(req, res) {
  try {
    const tickets = await repo.getAllTickets();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createTicket(req, res) {
  try {
    const { firstName, lastName, description, priority } = req.body;

    if (!firstName || !lastName || !description) {
      return res.status(400).json({ message: "First name, last name, and description are required" });
    }

    const fullName = `${firstName} ${lastName}`;

    const ticket = await repo.createTicket({ name: fullName, description, priority });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateTicket(req, res) {
  try {
    const updated = await repo.updateTicket(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Ticket not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteTicket(req, res) {
  try {
    await repo.deleteTicket(req.params.id);
    res.json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getAllTickets, createTicket, updateTicket, deleteTicket };
