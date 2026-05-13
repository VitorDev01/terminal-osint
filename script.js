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

// ===============================
// TERMINAL OSINT
// ===============================

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

let etapa = "comando";
let comandoAtual = "";

// ===============================
// EFEITO DIGITAÇÃO TERMINAL
// ===============================
function typeTerminal(text, callback = null) {

    let linha = document.createElement("div");
    linha.classList.add("terminal-line");

    terminalOutput.appendChild(linha);

    let i = 0;

    let typing = setInterval(() => {

        linha.innerHTML += text.charAt(i);

        i++;

        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        if (i >= text.length) {

            clearInterval(typing);

            if (callback) callback();
        }

    }, 12); // velocidade da digitação
}

// ===============================
// ENTER TERMINAL
// ===============================
terminalInput.addEventListener("keydown", function(e) {

    if (e.key !== "Enter") return;

    const valor = terminalInput.value.trim();

    if (!valor) return;

    typeTerminal(`<span class="prompt">vitordev01@root:~$</span> ${valor}`);

    // ===============================
    // ETAPA COMANDO
    // ===============================
    if (etapa === "comando") {

        if (valor.toLowerCase() === "osint") {

            comandoAtual = "osint";

            setTimeout(() => {

                typeTerminal(`[ SYSTEM ] Carregando módulos OSINT...`, () => {

                    typeTerminal(`[ OK ] Banco Wayback conectado`, () => {

                        typeTerminal(`
(01) - Posts do X apagados
(02) - Username Scan
(03) - Google Dork
                        `, () => {

                            typeTerminal(`Digite o número da opção:`);

                            etapa = "menu";
                        });

                    });

                });

            }, 300);

        } else {

            setTimeout(() => {
                typeTerminal(`[ ERROR ] comando não encontrado`);
            }, 200);
        }
    }

    // ===============================
    // MENU
    // ===============================
    else if (etapa === "menu") {

        if (valor === "1") {

            setTimeout(() => {

                typeTerminal(`[ MODULE ] Wayback Machine iniciado...`, () => {

                    typeTerminal(`Digite o username do X/Twitter:`);

                    etapa = "userX";
                });

            }, 200);

        } else {

            typeTerminal(`[ ERROR ] opção inválida`);
        }
    }

    // ===============================
    // USER X
    // ===============================
    else if (etapa === "userX") {

        const user = valor.replace("@", "");

        typeTerminal(`[ SCAN ] procurando posts apagados de @${user}...`);

        setTimeout(() => {

            window.open(
                `https://web.archive.org/web/*/https://twitter.com/${user}/status/*`,
                "_blank"
            );

            typeTerminal(`[ OK ] Redirecionando Wayback Machine...`);

        }, 1200);

        etapa = "comando";
    }

    terminalInput.value = "";
});
