const input = document.getElementById("terminalInput");
const output = document.getElementById("output");

let etapa = "";
let comandoAtual = "";

function addLine(text){

  const div = document.createElement("div");

  div.classList.add("line");

  div.innerHTML = text;

  output.appendChild(div);

  window.scrollTo(0, document.body.scrollHeight);
}

input.addEventListener("keydown", function(e){

  if(e.key !== "Enter") return;

  const valor = input.value.trim();

  addLine(`
    <span class="green">vitordev01@root</span>:~$
    ${valor}
  `);

  /* =========================
     COMANDO PRINCIPAL
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
     ESCOLHE OPÇÃO
  ========================= */

  else if(etapa === "menu" && valor === "1"){

    addLine(`
      Digite o username do X/Twitter:
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

    window.open(url, "_blank");

    addLine(`
      Abrindo Wayback Machine para:
      ${user}
    `);

    etapa = "";
  }

  /* =========================
     COMANDO INVÁLIDO
  ========================= */

  else{

    addLine(`
      comando não reconhecido...
    `);
  }

  input.value = "";
});
