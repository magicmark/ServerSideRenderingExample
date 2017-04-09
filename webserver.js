const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(22222, () => {
    console.log("Server listening on port 22222!");
})
