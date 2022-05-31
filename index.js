const express = require ('express');

const port = 5500;

const server = express ();

server.use(express.urlencoded({
    extended: true
}));

server.get('/', (req, res) => {
    res.send('Hello World 😀').status(200);
});

server.listen(port, () => console.log(`Server is listening on port ${port}`));