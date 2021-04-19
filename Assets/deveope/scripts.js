// variables 
var startBtn = document.getElementById('start-btn');
var nextBtnLink = document.getElementById('btn-link');
var nextBtn = document.getElementById('next-btn');
var quiz =  document.getElementById('quiz');
var clock =  document.getElementById('clock');
var questions =  document.getElementById('question');
var answers =  document.getElementById('ans-list');
var timer = document.getElementById('clock');
var a =  document.getElementById('a');
var b =  document.getElementById('b');
var c =  document.getElementById('c');
var d =  document.getElementById('d'); 
var index = 0;
var score = 0;
var secondsLeft = 15;
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
            {text: 'D. id is for single item on the page while calss can be applied to multiple items', correct: true}
        ]
    },
    {
        question: 'Youre Done!',
        answer: [
            {text: 'A'},
            {text: 'B.'},
            {text: 'C.'},
            {text: 'D.'}
        ]
    }
];

// shows the quiz
function show(event){
    quiz.setAttribute("style" , "display: block;");
    startBtn.className = 'hide';
    setQuestion();
    setTimer();
};

//sets the first question 
function setQuestion (event) {
    //populate the question
    questions.textContent = questionsArr[index].question;
    //populating the answers 
    a.textContent = questionsArr[index].answer[0].text;
    b.textContent = questionsArr[index].answer[1].text;
    c.textContent = questionsArr[index].answer[2].text;
    d.textContent = questionsArr[index].answer[3].text;
    checkAns();
};

//timer function
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--; 
        timer.textContent = secondsLeft ;
        //when timer gets to 0
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          window.location.href = './Assets/deveope/score.html'
        }
      }, 1000);
}

// to start the quiz 
startBtn.addEventListener("click", show, setQuestion);

//next button 
nextBtn.addEventListener("click", function(event){
    nextBtn.className = "start-btn hide";
    index++
    setQuestion();

    //changes the button after all questions have been answered
    if (index === 5) {
        //saves score to local storage
        score = localStorage.setItem('Score', JSON.stringify(score));
        // this will take you to the score page
        nextBtn.textContent = "Done";
        nextBtnLink.setAttribute('href', './Assets/deveope/score.html');
        nextBtn.setAttribute('style', 'color: white;');
           
          

    }
});

// answer checker
    function checkAns (){

        a.addEventListener('click', function(event){
            if (questionsArr[index].answer[0].correct){
                a.textContent = ' Correct';
                score += 1;
            } else {
                a.textContent = ' Wrong';
            }
            nextBtn.className = "start-btn";
        });

        b.addEventListener('click', function(event){
            if (questionsArr[index].answer[1].correct){
                b.textContent = ' Correct'; 
                score +=1;      
            } else {
                b.textContent = ' Wrong';        
            }
            nextBtn.className = "start-btn";
        });

        c.addEventListener('click', function(event){
            if (questionsArr[index].answer[2].correct){
                c.textContent = ' Correct'; 
                score += 1;              
            } else {
                c.textContent = ' Wrong';        
            }
            nextBtn.className = "start-btn";
        });

        d.addEventListener('click', function(event){
            if (questionsArr[index].answer[3].correct){
                d.textContent = ' Correct';
                score += 1;               
            } else {
                d.textContent = ' Wrong';        
            }
            nextBtn.className = "start-btn";
        });

    };

