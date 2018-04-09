const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log("server listening on port 3000");
})

// GREETINGS APP

app.get('/greeting/', (req, res) => {
	res.send("Hello, stranger")
})

app.get('/greeting/:name', (req, res) => {
	// const name = req.params.index
	res.send("Greetings, " + req.params.name + "! It's so great to see you!")
})