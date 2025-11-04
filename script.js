let question =[
    ["Quelle est la capitale de la France ?", "Berlin", "Madrid", "Paris", "Rome"],
    ["Que signifie HTML ?", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"],
    ["Quel langage est utilisé pour le style des pages web ?", "HTML", "CSS", "JavaScript", "Python"],
    ["Quelle balise HTML est utilisée pour insérer une image ?", "<img>", "<image>", "<picture>", "<src>"]
];

let reponse = [2, 0, 1, 0];
let choix = [];
let index = 0;
let score = 0;


const start = document.getElementById("start");
const prev = document.getElementById("precedent");
const next = document.getElementById("suivant");
const queAns = document.getElementById("question-answer");
const questions = document.getElementById("question");
const answers = document.getElementById("answers");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");



start.addEventListener("click", startQuiz);

prev.addEventListener("click", prevQuestion);

function startQuiz() {
    start.style.display = "none";
    prev.style.visibility = "hidden";
    queAns.style.display = "block";
    renderQuestion();
}

function renderQuestion() {
    questions.innerText = question[index][0];
    answer1.innerText = question[index][1];
    answer2.innerText = question[index][2];
    answer3.innerText = question[index][3];
    answer4.innerText = question[index][4];
}

next.addEventListener("click", nextQuestion);

    
function nextQuestion() {
    console.log(choix);
    
    if(index == 0) prev.style.visibility = "visible";
    if(index === question.length - 1) terminerQuiz();
    index++;
    renderQuestion();
}

function prevQuestion() {
    index--;
    if(index == 0) prev.style.visibility = "hidden";
    renderQuestion();
}
    
function terminerQuiz() {
    calculateScore();
}

function selectReponse(selectedId) {
    const currentChoice = choix.find(c=> c.index == index);
    if(currentChoice) {
        currentChoice.answer = selectedId;
    } else {
        choix.push({index: index, answer: selectedId});
    }
}

answers.addEventListener("click", function(event) { 
    selectReponse(parseInt(event.target.getAttribute("value"))); selectReponse(parseInt(event.target.getAttribute("value"))); 
});


function calculateScore() {
    score = 0;
    choix.forEach(c => {
        if(c.answer === reponse[c.index]) {
            score++;
        }
    });
    alert("Votre score est : " + score + "/" + question.length);
}