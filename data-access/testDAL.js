const connectDB = require('./db');
const repo = require('./repositories/ticketRepository'); 
const mongoose = require('mongoose'); // had to look all this up again

async function test() {
    await connectDB();
    console.log('Running the Data Access layer test, hope this works!');

    const created = await repo.createTicket({
        name: "Test Ticket",
        description: "Testing this ticket",
        priority: "High" // Testing the creation of the ticket, make sure I didnt mess up guys lol
    });
    console.log('Created Ticket:', created); //In VSC, it autocompletes a lot of the code, so if anything is off its probably cause it suggested it a lot of it

    const all = await repo.getAllTickets();
    console.log('All da Tickets:', all.length);

    const updated = await repo.updateTicket(created._id, { status: 'Closed' });
    console.log('Updated Ticket:', updated.status);

    await repo.deleteTicket(created._id);
    console.log('Deleted Ticket TEST:');

    await mongoose.disconnect();
    console.log('Disconnect feature testing! Yippee!');
}

    test().catch(err => {
        console.error('Error during DAL test:', err);
        process.exit(1);
    });
