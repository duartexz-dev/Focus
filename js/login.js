document.addEventListener("DOMContentLoaded", function () {

    // 1. NAVBAR DINÂMICA (Muda o background e padding ao rolar a página)
    const navbar = document.querySelector('.custom-navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. FADE-IN REVEAL AO ROLAR A PÁGINA
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = function () {
        revealElements.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 3. PRÉ-PREENCHER EMAIL E SENHA SE ESTIVEREM NO LOCALSTORAGE (para teste)
    const emailSalvo = localStorage.getItem("email");
    const senhaSalva = localStorage.getItem("senha");

    if (emailSalvo) {
        document.getElementById("email").value = JSON.parse(emailSalvo);
    }

});




// FECHAR ALERTAS
function fecharAlert() {
    document.getElementById("alertBox").style.display = "none";
}

function fecharErro() {
    document.getElementById("alertErro").style.display = "none";
}

function confirmLogin() {

    const email = JSON.parse(localStorage.getItem("email"))
    const senha = JSON.parse(localStorage.getItem("senha"))

    let emailC = document.getElementById("email").value
    let senhaC = document.getElementById("senha").value


    if (!email || !email.includes("@gmail.com") || !senha) {
        document.getElementById("alertErro").style.display = "flex"
    } else if (emailC === email && senhaC === senha) {

        document.getElementById("alertBox").style.display = "flex"

        setTimeout(() => {
            window.open("../home/home.html")
        }, 2000);

    } else {
        document.getElementById("alertErro").style.display = "flex"
    }



}

