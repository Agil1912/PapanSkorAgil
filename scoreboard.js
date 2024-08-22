let team1Score = 0;
let team2Score = 0;
let timerInterval;
let seconds = 0;
let currentQuarter = 1;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    document.getElementById('timer').innerText = `Time: ${minutes < 10 ? '0' + minutes : minutes}:${displaySeconds < 10 ? '0' + displaySeconds : displaySeconds}`;
    
    if (minutes >= 15) {
        startNewQuarter();
    }
}

function startNewQuarter() {
    clearInterval(timerInterval);
    seconds = 0;
    currentQuarter++;
    document.getElementById('quarter').innerText = `Quarter: ${currentQuarter}`;
    startTimer();
}

function addPoints(team, points) {
    if (team === 'team1') {
        team1Score += points;
        document.getElementById('team1-score').innerText = team1Score;
    } else if (team === 'team2') {
        team2Score += points;
        document.getElementById('team2-score').innerText = team2Score;
    }
}

function subtractPoints(team, points) {
    if (team === 'team1') {
        team1Score = Math.max(0, team1Score - points);
        document.getElementById('team1-score').innerText = team1Score;
    } else if (team === 'team2') {
        team2Score = Math.max(0, team2Score - points);
        document.getElementById('team2-score').innerText = team2Score;
    }
}

function resetScores() {
    team1Score = 0;
    team2Score = 0;
    seconds = 0;
    currentQuarter = 1;
    clearInterval(timerInterval);
    document.getElementById('team1-score').innerText = team1Score;
    document.getElementById('team2-score').innerText = team2Score;
    document.getElementById('timer').innerText = 'Time: 00:00';
    document.getElementById('quarter').innerText = 'Quarter: 1';
}
