/* =========================
   GERAR BARRAS
========================= */

const barcode =
document.getElementById("barcode");

/* padrão mais realista */
const pattern = [

  2,1,4,2,1,1,3,2,4,1,
  2,1,1,3,2,4,1,2,4,3,
  1,2,2,4,1,3,2,1,4,2,
  3,1,2,4,1,2,3,4,2,1,
  1,4,2,3,1,2,4,1,3,2,
  4,2,1,3,2,1,4,2,3,1

];

pattern.forEach((size, index) => {

    const bar =
    document.createElement("div");

    bar.classList.add("bar");

    /* largura */
    bar.style.width =
    size + "px";

    /* alturas diferentes */
    const randomHeight =
    60 + Math.random() * 40;

    bar.style.height =
    randomHeight + "%";

    /* delay individual */
    bar.style.animationDelay =
    (index * 0.05) + "s";

    barcode.appendChild(bar);

});

const input = document.getElementById("terminalInput");
const output = document.getElementById("output");

let etapa = "";

/* =========================
   ADICIONA LINHA
========================= */

function addLine(text){

  const div = document.createElement("div");

  div.className = "line";

  div.innerHTML = text;

  output.appendChild(div);

  output.scrollTop = output.scrollHeight;
}

/* =========================
   FOCO AUTOMÁTICO
========================= */

document.addEventListener("click", () => {
  input.focus();
});

window.onload = () => {
  input.focus();
};

/* =========================
   ENTER
========================= */

input.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    e.preventDefault();

    const valor = input.value.trim();

    if(valor === "") return;

    /* escreve comando digitado */
    addLine(`
      <span class="green">vitordev01@root</span>:~$ ${valor}
    `);

    /* =========================
       COMANDO OSINT
    ========================= */

    if(valor.toLowerCase() === "osint"){

      addLine(`
        [01] - Posts do X apagados
      `);

      addLine(`
        Digite o número da opção...
      `);

      etapa = "menu";
    }

    /* =========================
       MENU
    ========================= */

    else if(etapa === "menu" && valor === "1"){

      addLine(`
        Digite o username:
      `);

      etapa = "user_archive";
    }

    /* =========================
       USERNAME
    ========================= */

    else if(etapa === "user_archive"){

      const user = valor.replace("@","");

      const url =
      `https://web.archive.org/web/*/https://twitter.com/${user}/status/*`;

      addLine(`
        Abrindo rastreamento de:
        ${user}
      `);

      window.open(url, "_blank");

      etapa = "";
    }

    /* =========================
       INVÁLIDO
    ========================= */

    else{

      addLine(`
        comando não reconhecido...
      `);
    }

    input.value = "";
  }
});

