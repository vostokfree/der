// Simple running text effect
const runText = document.getElementById('running');
if (runText) {
  let offset = 0;
  setInterval(() => {
    offset = (offset + 1) % window.innerWidth;
    runText.style.transform = `translateX(-${offset}px)`;
  }, 50);
}
