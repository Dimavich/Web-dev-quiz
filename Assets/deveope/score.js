var nameEl = document.getElementById('nameEl');
var submit = document.getElementById('submit-btn');
var results = document.getElementById('result');
submit.addEventListener("click", scoreFunc);
var score = JSON.parse(localStorage.getItem('Score'));

// score
function scoreFunc (event){
    event.preventDefault();
    localStorage.setItem('Name', JSON.stringify(nameEl.value));
    var user = JSON.parse(localStorage.getItem('Name'));
    results.textContent = user + ' : ' + score;
};