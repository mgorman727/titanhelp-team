const express = require('express')
const cors = require('cors')
const connectDB = require('../data-access/db.js')
const ticketRoutes = require('./routes/tickets')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/tickets', ticketRoutes)

connectDB()

app.get('/', (req, res) => {
  res.json({ message: 'TitanHelp Application Layer is running!' })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
