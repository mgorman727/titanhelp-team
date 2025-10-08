# TitanHelp Team Project

A full-stack ticketing system that allows users to create, view, and track support tickets.

## Team Members

- Michael Gorman – Application Layer
- Nelson Rosario – Presentation Layer
- Sean Berlin – Data Access Layer

## Project Overview

TitanHelp is a help desk ticket management system structured with a clear separation of concerns:

- Presentation Layer (React frontend)
- Application Layer (Express backend)
- Data Access Layer (MongoDB Database)

## Prerequisites

- Node.js v14 or higher
- npm package manager
- Internet connection (for MongoDB Atlas access)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mgorman727/titanhelp-team.git
cd titanhelp-team
```

### 2. Set up the Data Access Layer

```bash
cd data-access
npm install
```

Test the database connection:

```bash
node testDAL.js
```

You should see "MongoDB connected to Atlas" and test data operations.

### 3. Set up the Backend (Application Layer)

```bash
cd ../application
npm install
npm start
```

The server will run on http://localhost:4000

### 4. Set up the Frontend (Presentation Layer)

```bash
cd ../presentation/ticket-app
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

## Project Structure

```
titanhelp-team/
├── application/      # Express backend
│   ├── controllers/  # Request handlers
│   ├── routes/      # API endpoints
│   └── server.js    # Main server file
├── presentation/     # React frontend
│   └── ticket-app/  # Vite React application
└── data-access/     # Database layer
    ├── models/      # MongoDB schemas
    └── repositories/# Data access logic
```

## Usage

1. Start all three layers in order:

   - Data access layer should be ready (MongoDB Atlas)
   - Start the application server (port 4000)
   - Start the frontend dev server (port 5173)

2. Open http://localhost:5173 in your browser
3. Create tickets using the form
4. View and manage tickets in the list
5. Update ticket status as needed

## API Endpoints

- `GET /tickets` - Retrieve all tickets
- `POST /tickets` - Create a new ticket
- `PUT /tickets/:id` - Update ticket status
- `DELETE /tickets/:id` - Delete a ticket

## Troubleshooting

1. Connection Issues:

   - Verify all three servers are running
   - Check MongoDB Atlas connection
   - Ensure ports 4000 and 5173 are available

2. Database Issues:

   - Run `testDAL.js` to verify database connection
   - Check MongoDB Atlas access in `data-access/db.js`
   - Verify your IP is whitelisted in MongoDB Atlas

3. Frontend Issues:
   - Check browser console for errors
   - Verify API endpoints in React components
   - Ensure CORS is properly configured

## Contributing

- The main branch contains only merged, reviewed code
- Create feature branches for new changes
- Submit pull requests for review
- Follow the existing code structure and patterns
