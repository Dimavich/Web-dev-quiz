// variables 
var startBtn = document.getElementById('start-btn');
var quiz =  document.getElementById('quiz');
var clock =  document.getElementById('clock');
var question =  document.getElementById('question');
var answers =  document.getElementsByClassName('ans-list');
var a =  document.getElementById('a');
var b =  document.getElementById('b');
var c =  document.getElementById('c');
var d =  document.getElementById('d');


function show(event){
    quiz.setAttribute("style" , "display: block;");
};



startBtn.addEventListener("click", show);