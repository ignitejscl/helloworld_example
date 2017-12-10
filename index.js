/** 
 * Hello, world! - Sample Project for Ignite.js
 */

const express = require('express')
const app = express()
const chalk = require('chalk')
const ora = require('ora')
const port = process.env.PORT || 8080

let spinner = ora("Starting server...").start()

app.get('/', (req, res) => {
	console.log(chalk.bold("GET /"));
	res.send("Hello, world! - Ignite.js sample project");
})

app.listen(port, () => {
	ora.succeed("Started server on port " + port);
	console.log(chalk.bold(":)"))
})
