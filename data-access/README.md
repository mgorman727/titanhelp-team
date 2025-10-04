NEEDS: Node.js v14 or higher
npm package manager
MongoDB Atlas account credentials I think?
In the Terminal 
cd data-access if you're not already there
next npm install
then run node testDAL.js too see if it ran. it should look something like this.

Running the Data Access layer test, hope this works!
Created Ticket: {
  name: 'Test Ticket',
  description: 'Testing this ticket',
  status: 'Open',
  priority: 'High',
  _id: new ObjectId('68e0592a2ffb2bbae2f9d845'),
  date: 2025-10-03T23:15:54.499Z,
  createdAt: 2025-10-03T23:15:54.503Z,
  updatedAt: 2025-10-03T23:15:54.503Z,
  __v: 0
}
All da Tickets: 2
Updated Ticket: Closed
Deleted Ticket TEST:
Disconnect feature testing! Yippee!

This means the MongoDB worked. I already hardcoded the MongoDB Atlas in db.js, it should work automatically as long as ur connected to the internet. So we will be using the same shared MongoDB.

Here are Helpful Websites I used to make this. Won't lie, I used ClaudeAI to help me polish and catch errors I had no idea what was happening, but it was all just syntax errors. I hate AI.

https://mongoosejs.com/docs/guide.html
(Pretty much where I made the Models schematypes and queries, also connections is where I learned to do MongoDB)

https://www.mongodb.com/docs/drivers/node/current/quick-start/ 

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose

This website was kind of a cheatcode, I pretty much used the code from here