let team1Score = 0;
let team2Score = 0;

function addPoints(team, points) {
    if (team === 'team1') {
        team1Score += points;
        document.getElementById('team1-score').innerText = team1Score;
    } else if (team === 'team2') {
        team2Score += points;
        document.getElementById('team2-score').innerText = team2Score;
    }
}

function resetScores() {
    team1Score = 0;
    team2Score = 0;
    document.getElementById('team1-score').innerText = team1Score;
    document.getElementById('team2-score').innerText = team2Score;
}
