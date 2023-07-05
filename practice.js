// click counter
// count=
// timer= 5
// button=> for clicks, log=> click1
// textarea=> to show clicks
// clear the text area
// return count back to 0
// timer shoul be reset
function clickCounter() {
  let count = 0;

  const clickContainer = document.getElementById("click-container");
  const theButton = document.getElementById("click-button");
  const gameOverMessage = document.getElementById("game-over-message");
  let timer;

  function handleTimeout() {
    count = 0;
    gameOverMessage.textContent = "GAME OVER ☹️ - Click the Button to Start Game Again";
    setTimeout(() => {
      gameOverMessage.textContent = "";
      clickContainer.innerHTML = ""; // Clear the clickContainer content
    }, 1500);

    clearInterval(timer);
  }

  function startTimer() {
    timer = setInterval(handleTimeout, 2000);
  }

  function handleClick() {
    count++;
    const clickText = document.createElement("h4");
    clickContainer.appendChild(clickText);

    clearInterval(timer);
    startTimer();
    clickText.textContent = `✅ CLICK: ${count}`;
  }

  theButton.addEventListener("click", handleClick);
}

clickCounter();

