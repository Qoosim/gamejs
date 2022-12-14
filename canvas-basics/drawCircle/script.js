const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCircle();
})

function drawCircle() {
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(130, 100, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

drawCircle();
