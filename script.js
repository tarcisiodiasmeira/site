/* ==================================================
   PERSONAGEM JP-TEC
   SEGUE O CURSOR
================================================== */

const personagem = document.getElementById("personagem");

const areaPersonagem =
    document.getElementById("personagem-container");


if (personagem && areaPersonagem) {

    let mouseX = 0;
    let mouseY = 0;

    let atualX = 0;
    let atualY = 0;


    /* ================================
       MOUSE
    ================================= */

    document.addEventListener("mousemove", function (event) {

        const largura = window.innerWidth;

        const altura = window.innerHeight;


        /*
         * Converte a posição do mouse
         * para valores entre -1 e 1
         */

        mouseX =
            (event.clientX / largura) * 2 - 1;

        mouseY =
            (event.clientY / altura) * 2 - 1;

    });


    /* ================================
       ANIMAÇÃO
    ================================= */

    function animarPersonagem() {

        /*
         * Movimento suave
         */

        atualX +=
            (mouseX - atualX) * 0.08;

        atualY +=
            (mouseY - atualY) * 0.08;


        /*
         * Rotação horizontal
         */

        const rotacaoY =
            atualX * 12;


        /*
         * Inclinação vertical
         */

        const rotacaoX =
            atualY * -7;


        /*
         * Pequeno movimento de profundidade
         */

        const profundidade =
            Math.abs(atualX) * 3;


        personagem.style.transform = `
            rotateX(${rotacaoX}deg)
            rotateY(${rotacaoY}deg)
            translateZ(${profundidade}px)
        `;


        requestAnimationFrame(animarPersonagem);

    }


    animarPersonagem();


    /* ================================
       CELULAR / TOUCH
    ================================= */

    document.addEventListener(
        "touchmove",
        function (event) {

            if (!event.touches.length) return;


            const touch =
                event.touches[0];


            const largura =
                window.innerWidth;

            const altura =
                window.innerHeight;


            mouseX =
                (touch.clientX / largura) * 2 - 1;

            mouseY =
                (touch.clientY / altura) * 2 - 1;

        },
        {
            passive: true
        }
    );

}