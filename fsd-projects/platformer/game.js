// TODO 2: Set Up Variables to Move the Box
let boxX = 0;
let boxY = 0;
let boxSpeed = 5;
let score = 0;
let misclicks = 0;

// TODO 3: Reset Box When Clicked
document.getElementById('canvas').addEventListener('click', function(event) {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (x >= boxX && x <= boxX + 50 && y >= boxY && y <= boxY + 50) {
    boxX = Math.random() * (rect.width - 50);
    boxY = Math.random() * (rect.height - 50);
    score++;
    boxSpeed += 0.5; // TODO 5: Speeding Up
  } else {
    misclicks++;
    if (misclicks >= 10) {
      alert('Game Over!');
      resetGame();
    }
  }
  updateGame();
});

// TODO 4: Keeping Score
function updateGame() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(boxX, boxY, 50, 50);
  document.getElementById('score').innerText = `Score: ${score}`;
  document.getElementById('misclicks').innerText = `Misclicks: ${misclicks}`;
}

// TODO 6: Make the Box Bounce (part 1)
function moveBox() {
  boxX += boxSpeed;
  boxY += boxSpeed;
  if (boxX <= 0 || boxX >= canvas.width - 50) {
    boxSpeed = -boxSpeed;
  }
  if (boxY <= 0 || boxY >= canvas.height - 50) {
    boxSpeed = -boxSpeed;
  }
  updateGame();
}

// TODO 7: Make the Box Bounce (part 2)
setInterval(moveBox, 100);

// Challenge 1: Change Your Box or Background
document.getElementById('canvas').style.backgroundColor = 'lightblue';

// Challenge 2: Can You Move the Box Up and Down?
// Already implemented in moveBox function

// Challenge 3: Can You Make the Box Start at a Random Location on Every Click?
// Already implemented in click event listener

// Challenge 4: Can You Make the Box Change Color with Each Click? How About Every 3 Clicks?
let clickCount = 0;
document.getElementById('canvas').addEventListener('click', function(event) {
  clickCount++;
  if (clickCount % 3 === 0) {
    document.getElementById('canvas').style.backgroundColor = getRandomColor();
  }
});

// Challenge 5: Can You Make the Amount that the Box Speeds Up Increase Every 3 Clicks?
// Already implemented in click event listener

// Challenge 6: Can You Make the Game End if You Mis-click 10 Times?
// Already implemented in click event listener

function resetGame() {
  boxX = 0;
  boxY = 0;
  boxSpeed = 5;
  score = 0;
  misclicks = 0;
  updateGame();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
