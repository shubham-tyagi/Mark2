var chalk = require("chalk");
var readLineSync = require("readline-sync");

var questionAnswers = [
	{
		question: "What is Dhoni's Shirt number : ",
		options: ["10", "7", "12"],
		answer: 2,
	},
	{
		question: "Who is the current test captain of Australia : ",
		options: ["Steve Smith", "Tim Paine", "ricky Ponting"],
		answer: 2,
	},
	{
		question: "What was the length of Steve Smith's ban period(In Years) : ",
		options: ["1", "2", "3"],
		answer: 1,
	},
	{
		question: "When is the next odi world cup (which year) ",
		options: ["2021", "2022", "2023"],
		answer: 3,
	},
	{
		question:
			"What is the cricket ground name of which is famously known as gabba in Australia",
		options: [
			"Brisbane Cricket Ground",
			"Melbourne Cricket Ground",
			"Sydney Cricket Ground",
		],
		answer: 1,
	},
];

var highestScore = [
	{
		name: "Sunita Tyagi",
		score: 10,
	},
	{
		name: "Priya Tyagi",
		score: 9,
	},
	{
		name: "Sudhir Tyagi",
		score: 8,
	},
];

function play(questionAnswer) {
	var ans = readLineSync.keyInSelect(
		questionAnswer.options,
		chalk.yellow(questionAnswer.question),
		{ cancel: "None" }
	);
	// console.log(ans);
	if (ans + 1 == questionAnswer.answer) return true;
	return false;
}

var score = 0;
for (let i = 0; i < questionAnswers.length; i++) {
	if (play(questionAnswers[i]) == true) score++;
}

console.log(
	chalk.bgWhiteBright(chalk.blue("\nYay Your Score is"), chalk.black(score))
);

console.log(chalk.cyan("\nCheckout highest score list (max size 3)"));

for (let i = 0; i < highestScore.length; i++)
	console.log(highestScore[i].name, highestScore[i].score);

console.log(
	"\nIf you have got the highest score send me a screenshot and I will update my list !!!"
);
