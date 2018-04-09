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

// TIP CALCULATOR

app.get('/tip/:total/:tipPercentage', (req, res) => {
	const data = {
		"total": parseInt(req.params.total),
		"tipPercentage": req.params.tipPercentage / 100,
	}

	console.log(data['total'] * data['tipPercentage'])
	res.send("Tip amount: " + (data['total'] * data['tipPercentage']).toString())
})

// MAGIC 8 BALL 

app.get("/magic/:input", (req, res) => {
	const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
	const question = req.params.input.toString();
	let randResponse = responses[Math.floor(Math.random() * responses.length)]
	console.log(question, randResponse)
	res.send("Your quesion: " + question + "? \n Magic 8 Ball Response: " + randResponse + ".");
	// res.send(randResponse);
})

// FIBONACCI

// app.get('/fibonacci/:num', (req, res) => {
// 	const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765] // can eventually make a program to do this, but using the first 20 fibs to test the express stuff
// 	let isFib;
// 	for (let i = 0; i < fibs.length; i++) {
// 		if (fibs[i] == req.params.num) {
// 			let isFib = true;
// 			console.log(isFib);
// 			res.send("Sweet number, dude.")
// 		} 
// 	}

// 	if (isFib != true)	{
// 		res.send("Brah, I can tell this ain't a fibonacci number. Wack.")
// 	}
// })

app.get('/fibonacci/:index', (req, res) => {
	const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
	res.send("The fibonacci number at index " + req.params.index + " is " + fibs[req.params.index].toString())
})