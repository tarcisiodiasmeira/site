/*
==========================================
MODELOS DISPONÍVEIS
==========================================
*/

const modelos = {

    /* =================================
       GALAXY A
    ================================= */

    "Galaxy A01": [
        "Galaxy A01"
    ],

    "Galaxy A02": [
        "Galaxy A02"
    ],

    "Galaxy A03": [
        "Galaxy A03"
    ],

    "Galaxy A04": [
        "Galaxy A04"
    ],

    "Galaxy A05": [
        "Galaxy A05"
    ],

    "Galaxy A06": [
        "Galaxy A06"
    ],

    "Galaxy A07": [
        "Galaxy A07"
    ],

    "Galaxy A10": [
        "Galaxy A10"
    ],

    "Galaxy A12": [
        "Galaxy A12"
    ],

    "Galaxy A13": [
        "Galaxy A13"
    ],

    "Galaxy A14": [
        "Galaxy A14"
    ],

    "Galaxy A15": [
        "Galaxy A15"
    ],

    "Galaxy A16": [
        "Galaxy A16"
    ],

    "Galaxy A17": [
        "Galaxy A17"
    ],

    "Galaxy A20": [
        "Galaxy A20"
    ],

    "Galaxy A21s": [
        "Galaxy A21s"
    ],

    "Galaxy A22": [
        "Galaxy A22"
    ],

    "Galaxy A23": [
        "Galaxy A23"
    ],

    "Galaxy A24": [
        "Galaxy A24"
    ],

    "Galaxy A25": [
        "Galaxy A25"
    ],

    "Galaxy A32": [
        "Galaxy A32"
    ],

    "Galaxy A33": [
        "Galaxy A33"
    ],

    "Galaxy A34": [
        "Galaxy A34"
    ],

    "Galaxy A35": [
        "Galaxy A35"
    ],

    "Galaxy A36": [
        "Galaxy A36"
    ],

    "Galaxy A52": [
        "Galaxy A52"
    ],

    "Galaxy A53": [
        "Galaxy A53"
    ],

    "Galaxy A54": [
        "Galaxy A54"
    ],

    "Galaxy A55": [
        "Galaxy A55"
    ],

    "Galaxy A56": [
        "Galaxy A56"
    ],

    "Galaxy A57": [
        "Galaxy A57"
    ],


    /* =================================
       GALAXY M
    ================================= */

    "Galaxy M10": [
        "Galaxy M10"
    ],

    "Galaxy M11": [
        "Galaxy M11"
    ],

    "Galaxy M12": [
        "Galaxy M12"
    ],

    "Galaxy M13": [
        "Galaxy M13"
    ],

    "Galaxy M14": [
        "Galaxy M14"
    ],

    "Galaxy M15": [
        "Galaxy M15"
    ],

    "Galaxy M21": [
        "Galaxy M21"
    ],

    "Galaxy M22": [
        "Galaxy M22"
    ],

    "Galaxy M23": [
        "Galaxy M23"
    ],

    "Galaxy M31": [
        "Galaxy M31"
    ],

    "Galaxy M32": [
        "Galaxy M32"
    ],

    "Galaxy M33": [
        "Galaxy M33"
    ],

    "Galaxy M34": [
        "Galaxy M34"
    ],

    "Galaxy M35": [
        "Galaxy M35"
    ],

    "Galaxy M51": [
        "Galaxy M51"
    ],

    "Galaxy M52": [
        "Galaxy M52"
    ],

    "Galaxy M53": [
        "Galaxy M53"
    ],

    "Galaxy M54": [
        "Galaxy M54"
    ],


    /* =================================
       GALAXY S
    ================================= */

    "Galaxy S8": [
        "Galaxy S8"
    ],

    "Galaxy S9": [
        "Galaxy S9"
    ],

    "Galaxy S10": [
        "Galaxy S10"
    ],

    "Galaxy S20": [
        "Galaxy S20"
    ],

    "Galaxy S21": [
        "Galaxy S21"
    ],

    "Galaxy S22": [
        "Galaxy S22"
    ],

    "Galaxy S23": [
        "Galaxy S23"
    ],

    "Galaxy S24": [
        "Galaxy S24"
    ],

    "Galaxy S25": [
        "Galaxy S25"
    ],

    "Galaxy S26": [
        "Galaxy S26"
    ],


    /* =================================
       GALAXY NOTE
    ================================= */

    "Galaxy Note 8": [
        "Galaxy Note 8"
    ],

    "Galaxy Note 9": [
        "Galaxy Note 9"
    ],

    "Galaxy Note 10": [
        "Galaxy Note 10"
    ],

    "Galaxy Note 20": [
        "Galaxy Note 20"
    ],


    /* =================================
       GALAXY Z
    ================================= */

    "Galaxy Z Flip 3": [
        "Galaxy Z Flip 3"
    ],

    "Galaxy Z Flip 4": [
        "Galaxy Z Flip 4"
    ],

    "Galaxy Z Flip 5": [
        "Galaxy Z Flip 5"
    ],

    "Galaxy Z Flip 6": [
        "Galaxy Z Flip 6"
    ],

    "Galaxy Z Flip 7": [
        "Galaxy Z Flip 7"
    ],

    "Galaxy Z Fold 3": [
        "Galaxy Z Fold 3"
    ],

    "Galaxy Z Fold 4": [
        "Galaxy Z Fold 4"
    ],

    "Galaxy Z Fold 5": [
        "Galaxy Z Fold 5"
    ],

    "Galaxy Z Fold 6": [
        "Galaxy Z Fold 6"
    ],

    "Galaxy Z Fold 7": [
        "Galaxy Z Fold 7"
    ]

};


/*
==========================================
ABRIR LISTA DE MODELOS
==========================================
*/

function abrirModelos(modelo) {

    document.getElementById("tituloModelo").textContent = modelo;

    const container =
        document.getElementById("opcoesModelos");

    container.innerHTML = "";

    modelos[modelo].forEach(function(nome) {

        const botao =
            document.createElement("button");

        botao.className = "botao-modelo";

        botao.innerHTML = `
            <strong>${nome}</strong>
            <span>Solicitar orçamento</span>
        `;

        botao.onclick = function() {

            abrirPreco(nome);

        };

        container.appendChild(botao);

    });

    document
        .getElementById("paginaModelos")
        .classList.add("aberta");
}


/*
==========================================
FECHAR MODELOS
==========================================
*/

function fecharModelos() {

    document
        .getElementById("paginaModelos")
        .classList.remove("aberta");

}


/*
==========================================
ABRIR ORÇAMENTO
==========================================
*/

function abrirPreco(nome) {

    document
        .getElementById("nomeCelular")
        .textContent = nome;

    document
        .getElementById("problemaCelular")
        .value = "";

    const botaoWhatsapp =
        document.getElementById("botaoWhatsapp");


    botaoWhatsapp.onclick = function(event) {

        event.preventDefault();

        const problema =
            document
                .getElementById("problemaCelular")
                .value
                .trim();


        if (problema === "") {

            alert(
                "Por favor, descreva o problema do celular."
            );

            return;
        }


        const numero =
            "5577998384275";


        const mensagem =
            "Olá! Gostaria de solicitar um orçamento para o " +
            nome +
            ".\n\n" +
            "Problema apresentado:\n" +
            problema;


        const link =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(mensagem);


        window.open(link, "_blank");

    };


    fecharModelos();


    document
        .getElementById("paginaPreco")
        .classList.add("aberta");

}


/*
==========================================
FECHAR ORÇAMENTO
==========================================
*/

function fecharPreco() {

    document
        .getElementById("paginaPreco")
        .classList.remove("aberta");

}


/*
==========================================
CLICAR FORA DO CARD
==========================================
*/

document
    .getElementById("paginaModelos")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                fecharModelos();

            }

        }
    );


document
    .getElementById("paginaPreco")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                fecharPreco();

            }

        }
    );