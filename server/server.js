const express = require('express');
const rendering = require('./renderer');

const app = express();
const port = 8001;

//Serve static files
app.use(express.static('build'));

// This is fired every time the server side receives a request
app.use(rendering.handleRender);

app.disable('x-powered-by');

app.listen(port, () => {
  console.log(`Production Express server running at: ${port}.`)
});
