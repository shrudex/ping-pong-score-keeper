p1Score = document.querySelector("#p1-score");
p2Score = document.querySelector("#p2-score");

p1Button = document.querySelector("#p1-button");
p2Button = document.querySelector("#p2-button");
reset = document.querySelector("#reset");

maxGame = document.querySelector("#max-limit");

let p1score = 0, p2score = 0, winningscore = 5, isGame = false;
p1Button.addEventListener("click", () => {
    if (!isGame) {
        p1score+=1;
        if (p1score === winningscore) {
            isGame = true;
            p1Score.classList.add("winner");
            p2Score.classList.add("loser");
        }
        p1Score.textContent = p1score;
    }
})

p2Button.addEventListener("click", () => {
    if (!isGame) {
        p2score+=1;
        if (p2score === winningscore) {
            isGame = true;
            p2Score.classList.add("winner");
            p1Score.classList.add("loser");
        }
        p2Score.textContent = p2score;
    }
})
maxGame.addEventListener("change", function () {
    winningscore = parseInt(this.value);
    resetScore();
})
reset.addEventListener("click", resetScore)

function resetScore() {
    isGame = false;
    p1score = 0, p2score = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove("winner");
    p1Score.classList.remove("loser");
    p2Score.classList.remove("winner");
    p2Score.classList.remove("loser");
}