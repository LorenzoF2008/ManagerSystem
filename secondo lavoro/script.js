// Dimensione totale RAM
const RAM_SIZE = 1000; // MB

// Array memoria (inizialmente tutta libera)
let memoria = [
    { nome: "LIBERO", dimensione: RAM_SIZE }
];

// Disegna la RAM
function disegnaRAM() {
    const ramDiv = document.getElementById("ram");
    ramDiv.innerHTML = "";

    memoria.forEach(blocco => {
        const div = document.createElement("div");
        div.classList.add("blocco");

        if (blocco.nome === "LIBERO") {
            div.style.backgroundColor = "#ccc";
        } else {
            div.style.backgroundColor = "#4CAF50";
        }

        div.style.height = blocco.dimensione / 2 + "px";
        div.innerText = blocco.nome + " (" + blocco.dimensione + "MB)";
        ramDiv.appendChild(div);
    });

    calcolaSpazioLibero();
}

// Algoritmo First Fit
function aggiungiProcesso() {
    const nome = document.getElementById("nome").value;
    const dimensione = parseInt(document.getElementById("dimensione").value);

    if (!nome || !dimensione) {
        alert("Inserisci nome e dimensione validi!");
        return;
    }

    for (let i = 0; i < memoria.length; i++) {
        if (memoria[i].nome === "LIBERO" && memoria[i].dimensione >= dimensione) {

            let spazioRimanente = memoria[i].dimensione - dimensione;

            memoria[i] = { nome: nome, dimensione: dimensione };

            if (spazioRimanente > 0) {
                memoria.splice(i + 1, 0, {
                    nome: "LIBERO",
                    dimensione: spazioRimanente
                });
            }

            disegnaRAM();
            return;
        }
    }

    alert("Memoria insufficiente!");
}

// Calcolo spazio libero totale
function calcolaSpazioLibero() {
    let libero = 0;

    memoria.forEach(blocco => {
        if (blocco.nome === "LIBERO") {
            libero += blocco.dimensione;
        }
    });

    document.getElementById("spazioLibero").innerText =
        "Spazio libero totale: " + libero + " MB";
}

// Inizializza
disegnaRAM();
