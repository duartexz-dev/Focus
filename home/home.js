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

let tarefas = document.getElementById("tasksR")
let tarefasS = localStorage.getItem("TasksSalvas")

tarefas.innerHTML = `${tarefasS}`

let tarefasC = document.getElementById("TarefasConcluidas")
let metas = document.getElementById("Metas")
let produtividade = document.getElementById("Produtividade")
let sequencia = document.getElementById("SequenciaDiaria")

metas.innerHTML = 0
tarefasC.innerHTML = 0
produtividade.innerHTML = 0 + "%"
sequencia.innerHTML = 0 + "d"

const nome = JSON.parse(localStorage.getItem("nomeUser"))

// ========== VARIÁVEIS DOS ELEMENTOS PARA MODIFICAR ==========
// Seção Hero/Bem-vindo
const welcomeMessage = document.getElementById('welcomeMessage');
const heroTitle = document.getElementById('heroTitle');

// Seção de Tarefas Recentes
const tasksLabel = document.getElementById('tasksLabel');
const recentTasksTitle = document.getElementById('recentTasksTitle');
const taskSectionMessage = document.getElementById('taskSectionMessage');
const dailyProgressText = document.getElementById('dailyProgressText');
const dailyProgressBar = document.getElementById('dailyProgressBar');

// Seção de Metas
const goalsTitle = document.getElementById('goalsTitle');
const goalsMessage = document.getElementById('goalsMessage');

// Task 1
const task1 = document.getElementById('task-1');
const task1Name = document.getElementById('task-1-name');
const task1Description = document.getElementById('task-1-description');
const task1Category = document.getElementById('task-1-category');
const task1Priority = document.getElementById('task-1-priority');
const task1DateText = document.getElementById('task-1-date-text');
const task1Btn = document.getElementById('task-1-btn');

// Task 2
const task2 = document.getElementById('task-2');
const task2Name = document.getElementById('task-2-name');
const task2Description = document.getElementById('task-2-description');
const task2Category = document.getElementById('task-2-category');
const task2Priority = document.getElementById('task-2-priority');
const task2DateText = document.getElementById('task-2-date-text');
const task2Btn = document.getElementById('task-2-btn');

// Task 3
const task3 = document.getElementById('task-3');
const task3Name = document.getElementById('task-3-name');
const task3Description = document.getElementById('task-3-description');
const task3Category = document.getElementById('task-3-category');
const task3Priority = document.getElementById('task-3-priority');
const task3DateText = document.getElementById('task-3-date-text');
const task3Btn = document.getElementById('task-3-btn');


// ========== PERSONALIZANDO TEXTOS COM O NOME ==========
if (nome) {
    // Bem-vindo
    welcomeMessage.textContent = '👋 Bem-vindo(a), ' + nome + '!';

    // Seção de Tarefas
    recentTasksTitle.textContent = nome + ' - Tarefas Recentes';
    taskSectionMessage.textContent = 'Esta é sua área de tarefas. Vamos criar uma tarefa?';
    // Seção de Metas
    goalsMessage.textContent = 'Alcance seus objetivos de longo prazo, ' + nome + '. Vamos definir metas?';
}



function criarTarefa() {

    let nomeTask = document.getElementById("nomeT").value
    let dataTask = document.getElementById("dataT").value
    let hora = document.getElementById("horaT").value
    let bioTask = document.getElementById("bioT").value
    let tasksRescentes = document.getElementById("tasksR")
    if (!nomeTask || !dataTask || !hora || !bioTask) {
        document.getElementById("alertErro").style.display = "flex"
    } else {
        tasksRescentes.innerHTML += `<div class="col-md-6 col-lg-4">
    <div class="task-card d-flex flex-column h-100 p-4 rounded-4">
        <h4 class="task-title">
            ${nomeTask}
        </h4>
        <p class="task-desc text-muted flex-grow-1">
            ${bioTask}
        </p>
        <div class="task-footer d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-secondary-subtle">
            <span class="task-date text-muted font-sm">
                <i class="bi bi-calendar3 me-1"></i>
                <span>
                    ${dataTask} / ${hora}
                </span>
            </span>
            <button class="btn-done" onclick = "concluirTask()">             <i class="bi bi-check-circle"></i>
                Concluir
            </button>
        </div>
    </div>
</div>`

        limparFormulario()
        document.getElementById("alertBox").style.display = "flex"

        localStorage.setItem("TasksSalvas", tasksRescentes.innerHTML)

    }
}

function limparFormulario() {
    document.getElementById("nomeT").value = ""
    document.getElementById("dataT").value = ""
    document.getElementById("horaT").value = ""
    document.getElementById("bioT").value = ""
}
function fecharAlert() {
    document.getElementById("alertBox").style.display = "none";
}

function fecharErro() {
    document.getElementById("alertErro").style.display = "none";
}




function concluirTask() {

    tarefasC + 1


}