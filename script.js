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

    // 2. FADE-IN REVEAL AO ROLAR A PÁGINA (Efeito de aparição suave)
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = function () {
        revealElements.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Ativa o elemento quando ele chega a 85% da altura da tela
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };

    // Executa uma vez no início e depois a cada scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 3. INTERAÇÃO VISUAL NOS CARD-BUTTONS (Simulação de conclusão)
    const doneButtons = document.querySelectorAll('.btn-done');

    doneButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const taskCard = this.closest('.task-card');

            // Pequeno feedback visual simulando conclusão
            if (!taskCard.style.opacity || taskCard.style.opacity === "1") {
                taskCard.style.opacity = "0.4";
                taskCard.style.transform = "scale(0.98)";
                this.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i> Concluído';
            } else {
                taskCard.style.opacity = "1";
                taskCard.style.transform = "none";
                this.innerHTML = '<i class="bi bi-check-circle"></i> Concluir';
            }
        });
    });
});


//sistema de cadastro//

function cadastrar() {

    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value


    if (!email || !email.includes("@gmail.com") || !senha || !nome) {
        document.getElementById("alertErro").style.display = "flex"
    } else {

        document.getElementById("alertBox").style.display = "flex"


        localStorage.setItem("nomeUser", JSON.stringify(nome));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("senha", JSON.stringify(senha));

        setTimeout(() => {

            window.open("./pages/login.html")

        }, 2000)


    }


} function fecharAlert() {
    document.getElementById("alertBox").style.display = "none"
}
function fecharErro() {
    document.getElementById("alertErro").style.display = "none"
}