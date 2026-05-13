/* =========================
   MATRIX
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 14;

const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
  drops[i] = 1;
}

function drawMatrix(){

  ctx.fillStyle = "rgba(2,11,10,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px Share Tech Mono";

  for(let i = 0; i < drops.length; i++){

    const text =
    letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(
      text,
      i * fontSize,
      drops[i] * fontSize
    );

    if(
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ){
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

/* =========================
   GLOBO ASCII ANIMADO
========================= */

const globe = document.getElementById("asciiGlobe");

const globeFrames = [

`
            .-""""-.
         .-'  .--.  '-.
       .'   .'    '.   '.
      /   .'  .--.  '.   \\
     ;   /   (____)   \\   ;
     |  |  .--------.  |  |
     ;  |  |  .--.  |  |  ;
      \\  \\ | (____) | /  /
       '. '.'.____.'.' .'
         '-.______.-'
`,

`
            .-""""-.
         .-'  .--.  '-.
       .'  .-'    '-.  '.
      /  .'  .--.    '.  \\
     ;  /   (____)     \\  ;
     | |  .---------.   | |
     ; |  |  .--.   |   | ;
      \\ \\ | (____)  |  / /
       '.'.'._____.'.'.'
         '-.______.-'
`,

`
            .-""""-.
         .-'  .--.  '-.
       .'   .'    '.   '.
      /   /  .--.  \\    \\
     ;   |  (____) |    ;
     |   | .------.|    |
     ;   | | .--. ||    ;
      \\   \\|(____)||   /
       '.  '.____.'  .'
         '-.______.-'
`
];

let frame = 0;

setInterval(() => {

  globe.textContent = globeFrames[frame];

  frame++;

  if(frame >= globeFrames.length){
    frame = 0;
  }

}, 400);

/* =========================
   TEXTO DIGITANDO
========================= */

const typed = document.getElementById("typed");

const phrase =
"INICIANDO RASTREAMENTO";

let index = 0;

function typeText(){

  if(index < phrase.length){

    typed.innerHTML += phrase.charAt(index);

    index++;

    setTimeout(typeText, 90);
  }
}

typeText();

/* RESPONSIVO */
window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});
