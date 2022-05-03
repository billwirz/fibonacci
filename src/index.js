const express = require('express');
const app = express();

const DEFAULT_PORT = 8080;
const port = process.env.port || DEFAULT_PORT;

app.listen(port, () => {
    console.log(`Fibonacci app listening on port ${port}`);
});

app.use(express.static("public"));
