// application/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/tickets');
const app = express();
app.use(cors());
app.use(express.json());

let mongoUri = process.env.MONGODB_URI || null;

try {
  require('../../data-access/db');
  console.log('Required data-access/db.js (if present).');
} catch (e) {
}
if (!mongoUri && process.env.MONGODB_URI) {
  mongoUri = process.env.MONGODB_URI;
}
if (mongoUri) {
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Application layer connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err.message));
} else {
  console.warn('No MONGODB_URI found.');
}
app.use('/api/tickets', ticketRoutes);
app.get('/', (req, res) => res.send('TitanHelp application layer running'));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Application Layer running on port ${PORT}`));
