const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const left = dodger.style.left.replace('px', '');
  const leftNumber = parseInt(left, 10);


  if (leftNumber > 0) {
    dodger.style.left = `${leftNumber - 1}px`;
  }
}

function moveDodgerRight() {
  const left = dodger.style.left.replace('px', '');
  const leftNumber = parseInt(left, 10);

  const gameFieldWidth = window.innerWidth - 40; 
  if (leftNumber + 40 >= gameFieldWidth) {
    return;
  }

  dodger.style.left = `${leftNumber + 1}px`;
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});