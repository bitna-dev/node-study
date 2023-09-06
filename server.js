const express = require("express");
const port = 4000;

const users = [
	{
		id: 0,
		name: "Jack",
	},
	{
		id: 1,
		name: "Bitna",
	},
	{
		id: 2,
		name: "Jennifer",
	},
];

const app = express();
app.get("/", (req, res) => {
	res.send("Hello world");
});
app.get("/users", (req, res) => {
	res.send(users);
});
app.get("/users/:id", (req, res) => {
	const id = Number(req.params.id);
	const user = users[id];
	if (user) {
		res.send(user);
	} else {
		res.sendStatus(404);
	}
});

app.listen(port, () => {
	console.log(`Running on ${port}`);
});
