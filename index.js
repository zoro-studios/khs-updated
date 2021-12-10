const ps = require("prompt-sync");
var Kahoot = require("kahoot.js-updated");
var kahoots = [];
const pin = ps();
const botcount = ps();
const names = ps();
for(const i=0; i<botcount; i++){

let pin = prompt("Enter game pin: ");
let botcount = prompt("Enter amount of bots you want: ");
let names = ps();

kahoots.push(new Kahoot);
kahoots[i].join(pin, names).catch(error => {
    console.log("Sorry failed")
});
kahoots[i].on("Joined",() => {
    console.log("Enjoy the stress :D")

});
kahoots[i].on("QuestionStart", (question) => {
question.answer(
    Math.floor(
        Math.random() * question.quizQuestionAnswers[question.questionIndex]

    ) * 0
);
});
kahoots[i].on("Disconect", (reason) => {
   console.log("Disconected") 
});
}