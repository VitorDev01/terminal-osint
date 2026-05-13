/* =========================
   GERAR BARRAS
========================= */
const barcode = document.getElementById("barcode");

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
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.width = size + "px";
    const randomHeight = 60 + Math.random() * 40;
    bar.style.height = randomHeight + "%";
    bar.style.animationDelay = (index * 0.05) + "s";
    barcode.appendChild(bar);
});

// ===============================
// TERMINAL OSINT - VERSÃO ORGANIZADA
// ===============================
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

let etapa = "comando";

// EFEITO DIGITAÇÃO
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
    }, 12);
}

// ENTER TERMINAL
terminalInput.addEventListener("keydown", function(e) {
    if (e.key !== "Enter") return;
    const valor = terminalInput.value.trim();
    if (!valor) return;

    typeTerminal(`<span class="prompt">vitordev01@root:~$</span> ${valor}`);

    if (etapa === "comando") {
        if (valor.toLowerCase() === "osint") {
            setTimeout(() => {
                typeTerminal(`[ SYSTEM ] Carregando módulos OSINT...`, () => {
                    typeTerminal(`[ OK ] Todos os módulos carregados`, () => {
                        
                        typeTerminal(" ");
                        typeTerminal("=== OSINT MENU ===");
                        typeTerminal("(01) - Posts do X/Twitter apagados");
                        typeTerminal("(02) - Username Scan Multiplataforma");
                        typeTerminal("(03) - Google Dork Avançado (Nome exato)");
                        typeTerminal("(04) - Instagram (Threads + Tagging)");
                        typeTerminal("(05) - Busca Facebook");
                        typeTerminal("(06) - Processos Judiciais (BR)");
                        typeTerminal("(07) - Reclame Aqui");
                        typeTerminal("(08) - Pinterest");
                        typeTerminal("(09) - Spotify");
                        typeTerminal("(10) - Busca por Número de Telefone");
                        typeTerminal("(11) - Enumeração de Emails");
                        typeTerminal("(12) - Badoo + Hornet");
                        typeTerminal("(13) - Telegram (t.me intext)");
                        typeTerminal("(14) - Maçonaria / Freemason");
                        typeTerminal("(15) - Sex Offender (EUA)");
                        typeTerminal(" ");
                        typeTerminal("=== +18 / ADULT ===");
                        typeTerminal("(16) - Garotos com Local");
                        typeTerminal("(17) - Garotas com Local");
                        typeTerminal("(18) - Fatalmodel Garotos");
                        typeTerminal("(19) - Fatalmodel Garotas");
                        typeTerminal(" ");
                        typeTerminal("Digite o número da opção:");

                        etapa = "menu";
                    });
                });
            }, 400);
        } else {
            setTimeout(() => typeTerminal(`[ ERROR ] comando não encontrado`), 200);
        }
    }

    // ====================== MENU ======================
    else if (etapa === "menu") {
        switch (valor) {
            case "1":
                typeTerminal(`[ MODULE ] Wayback Machine`);
                setTimeout(() => { typeTerminal(`Digite o username do X:`); etapa = "userX"; }, 300);
                break;
            case "2":
                typeTerminal(`[ MODULE ] Username Multiplataforma`);
                setTimeout(() => { typeTerminal(`Digite o username:`); etapa = "multiUsername"; }, 300);
                break;
            case "3":
                typeTerminal(`[ MODULE ] Google Dork Avançado`);
                setTimeout(() => { typeTerminal(`Digite o nome completo:`); etapa = "dorkAvancado"; }, 300);
                break;
            case "4":
                typeTerminal(`[ MODULE ] Instagram OSINT`);
                setTimeout(() => { typeTerminal(`Digite o username:`); etapa = "instagram"; }, 300);
                break;
            case "5":
                typeTerminal(`[ MODULE ] Facebook`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "facebook"; }, 300);
                break;
            case "6":
                typeTerminal(`[ MODULE ] Processos Judiciais`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "processos"; }, 300);
                break;
            case "7":
                typeTerminal(`[ MODULE ] Reclame Aqui`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "reclame"; }, 300);
                break;
            case "8":
                typeTerminal(`[ MODULE ] Pinterest`);
                setTimeout(() => { typeTerminal(`Digite o username:`); etapa = "pinterest"; }, 300);
                break;
            case "9":
                typeTerminal(`[ MODULE ] Spotify`);
                setTimeout(() => { typeTerminal(`Digite o username:`); etapa = "spotify"; }, 300);
                break;
            case "10":
                typeTerminal(`[ MODULE ] Busca por Número`);
                setTimeout(() => { typeTerminal(`Digite o número:`); etapa = "numero"; }, 300);
                break;
            case "11":
                typeTerminal(`[ MODULE ] Enumeração de Emails`);
                setTimeout(() => { typeTerminal(`Digite o username (sem @):`); etapa = "emailEnum"; }, 300);
                break;
            case "12":
                typeTerminal(`[ MODULE ] Badoo + Hornet`);
                setTimeout(() => { typeTerminal(`Digite o username:`); etapa = "adultSites"; }, 300);
                break;
            case "13":
                typeTerminal(`[ MODULE ] Telegram intext`);
                setTimeout(() => { typeTerminal(`Digite a palavra/nome:`); etapa = "tme"; }, 300);
                break;
            case "14":
                typeTerminal(`[ MODULE ] Maçonaria`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "macon"; }, 300);
                break;
            case "15":
                typeTerminal(`[ MODULE ] Sex Offender EUA`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "offender"; }, 300);
                break;

            // +18
            case "16":
                typeTerminal(`[ +18 ] Garotos com Local`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "garotosLocal"; }, 300);
                break;
            case "17":
                typeTerminal(`[ +18 ] Garotas com Local`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "garotasLocal"; }, 300);
                break;
            case "18":
                typeTerminal(`[ +18 ] Fatalmodel Garotos`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "fatalGarotos"; }, 300);
                break;
            case "19":
                typeTerminal(`[ +18 ] Fatalmodel Garotas`);
                setTimeout(() => { typeTerminal(`Digite o nome:`); etapa = "fatalGarotas"; }, 300);
                break;

            default:
                typeTerminal(`[ ERROR ] Opção inválida`);
        }
    }

    // ====================== EXECUÇÃO ======================
    else if (etapa === "userX") {
        const user = valor.replace("@", "");
        typeTerminal(`[ SCAN ] Buscando posts apagados de @${user}...`);
        setTimeout(() => {
            window.open(`https://web.archive.org/web/*/https://twitter.com/${user}/status/*`, "_blank");
            typeTerminal(`[ OK ] Redirecionando...`);
            etapa = "comando";
        }, 800);
    }

    else if (etapa === "multiUsername") { document.getElementById("userMulti").value = valor; buscarMulti(); etapa = "comando"; }
    else if (etapa === "dorkAvancado") { document.getElementById("userDork").value = valor; buscarAvancado(); etapa = "comando"; }
    else if (etapa === "instagram") { 
        document.getElementById("usernameInput").value = valor; abrirPerfil();
        document.getElementById("searchInput").value = valor; buscarTagging(); 
        etapa = "comando"; 
    }
    else if (etapa === "facebook") { document.getElementById("userFacebook").value = valor; buscarFacebook(); etapa = "comando"; }
    else if (etapa === "processos") { document.getElementById("userProcesso").value = valor; buscarProcessos(); etapa = "comando"; }
    else if (etapa === "reclame") { document.getElementById("reclameAqui").value = valor; buscarReclameAqui(); etapa = "comando"; }
    else if (etapa === "pinterest") { document.getElementById("userPinterest").value = valor; buscarPinterest(); etapa = "comando"; }
    else if (etapa === "spotify") { document.getElementById("userSpotify").value = valor; buscarSpotify(); etapa = "comando"; }
    else if (etapa === "numero") { document.getElementById("userNumber").value = valor; buscarNumero(); etapa = "comando"; }
    else if (etapa === "emailEnum") { document.getElementById("userEmailEnum").value = valor; buscarEmail(); etapa = "comando"; }
    else if (etapa === "adultSites") { 
        document.getElementById("userBadoo").value = valor; buscarBadoo();
        document.getElementById("userHornet").value = valor; buscarHornet(); 
        etapa = "comando"; 
    }
    else if (etapa === "tme") { document.getElementById("tmeIntext").value = valor; buscarTmeIntext(); etapa = "comando"; }
    else if (etapa === "macon") { document.getElementById("userMacon").value = valor; buscarMacon(); etapa = "comando"; }
    else if (etapa === "offender") { document.getElementById("userOffender").value = valor; buscarOffender(); etapa = "comando"; }

    // +18
    else if (etapa === "garotosLocal") { 
        document.getElementById("garotosComLocal").value = valor; 
        buscarGarotosComLocal(); 
        etapa = "comando"; 
    }
    else if (etapa === "garotasLocal") { 
        document.getElementById("garotasComLocal").value = valor; 
        buscarGarotasComLocal(); 
        etapa = "comando"; 
    }
    else if (etapa === "fatalGarotos") { 
        document.getElementById("fatalmodelGarotos").value = valor; 
        buscarFatalmodelGarotos(); 
        etapa = "comando"; 
    }
    else if (etapa === "fatalGarotas") { 
        document.getElementById("fatalmodelGarotas").value = valor; 
        buscarFatalmodelGarotas(); 
        etapa = "comando"; 
    }

    terminalInput.value = "";
});
