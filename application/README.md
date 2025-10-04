# Application Layer (Express API)

## Start
1. cd application
2. npm install
3. set environment variable MONGODB_URI 
4. npm start
Server runs on port 5000 by default.

## Endpoints
GET  /api/tickets
POST /api/tickets  body: { name, description, priority }
PUT  /api/tickets/:id
DELETE /api/tickets/:id
