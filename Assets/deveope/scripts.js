// variables 
var startBtn = document.getElementById('start-btn');
var quiz =  document.getElementById('quiz');
var clock =  document.getElementById('clock');
var questions =  document.getElementById('question');
var answers =  document.getElementById('ans-list');
var a =  document.getElementById('a');
var b =  document.getElementById('b');
var c =  document.getElementById('c');
var d =  document.getElementById('d');
// questions
var questionsArr = [
    {
        question: 'What does HTML stand for?',
        answer: [
            {text: 'A. Hyper Text Markup Language', correct: true},
            {text: 'B. Hyper Text Main Language', correct: false},
            {text: 'C. Hyper Text Main Location', correct: false},
            {text: 'D. Hyper Text Markup Location', correct: false}
        ]
    },
    {
        question: 'What does CSS stand for?',
        answer: [
            {text: 'A. Cascading styles selectors', correct: false},
            {text: 'B. Coding styles sheet', correct: false},
            {text: 'C. Cascading styles sheet', correct: true},
            {text: 'D. Coding styles selector', correct: false}
        ]
    },
    {
        question:'How should every HTML document be started',
        answer: [
            {text: 'A. <html>', correct: false},
            {text: 'B. <html DOCTYPE!>', correct: false},
            {text: 'C. <html src ="index.html">', correct: false},
            {text: 'D. <!DOCTYPE html>', correct: true}
        ]
    },
    {
        question: 'How would you select every element in CSS?',
        answer: [
            {text: 'A. :root', correct: false},
            {text: 'B. *', correct: true},
            {text: 'C. html', correct: false},
            {text: 'D. !', correct: false}
        ]
    },
    {
        question: 'What is the difference between a html class and an id?',
        answer: [
            {text: 'A. personal preferance', correct: false},
            {text: 'B. class is for single use while id can be applied to multiple items', correct: false},
            {text: 'C. id is only used for Javascript and class is used to style the page with css', correct: false},
            {text: 'D. id is for single item on the page while calss can be applied to multople items', correct: true}
        ]
    }
];




function show(event){
    quiz.setAttribute("style" , "display: block;");
};


startBtn.addEventListener("click", show);