// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});