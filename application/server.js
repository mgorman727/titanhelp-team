const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let tickets = [];

app.get("/tickets", (req, res) => {
  res.json(tickets);
});

app.post("/tickets", (req, res) => {
  const { name, description, priority } = req.body;

  if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
    return res.status(400).json({ error: "Name is required and must be 1-100 characters." });
  }
  if (!description || typeof description !== "string" || description.trim().length === 0 || description.length > 1000) {
    return res.status(400).json({ error: "Problem Description is required and must be 1-1000 characters." });
  }
  const normalizedPriority = ["Low", "Medium", "High"].includes(priority) ? priority : "Low";

  const newTicket = {
    id: Date.now(), 
    name: name.trim(),
    problemDescription: description.trim(),
    priority: normalizedPriority,
    status: "Open",
    date: new Date().toISOString()
  };

  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

app.get("/", (req, res) => res.send("TitanHelp application layer running"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Application Layer running on port ${PORT}`));
