const highscores = document.querySelector('#highscores')
const scores = JSON.parse(localStorage.getItem('Quiz-Highscores')) || [];
if(scores.length) {
    scores.sort((a,b) => a.score - b.score)
    console.log(scores)
    for(let i = 0; i < scores.length; i++) {
        console.log(scores[i])
        const scoreEl = document.createElement('li')
        scoreEl.textContent = scores[i].initials + ": " + scores[i].score
        highscores.append(scoreEl)
    }
}

var clearButton = document.getElementById('clear');
clearButton.addEventListener(onclick, function() {console.log("ok")});