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
tarefas.innerHTML = 0
tarefas.innerHTML = `${tarefasS}`


let tarefasCHistorico = document.getElementById("TarefasConcluidas")
tarefasCHistorico.innerHTML = localStorage.getItem("tarefasFeitas")

document.addEventListener("DOMContentLoaded", function () {
    atualizarSequencia();
}); // função que vê quando o user entra na página //

let metas = document.getElementById("Metas")

metas.innerHTML = 0


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
        atualizarTotal(1)
        atualizarProgresso()
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
    let TarefasFeitas = Number(tarefasCHistorico.innerHTML) + 1
    tarefasCHistorico.innerHTML = `${TarefasFeitas}`
    localStorage.setItem("tarefasFeitas", TarefasFeitas)
    atualizarConcluidas(1)
    atualizarProgresso()

}

function atualizarTotal(adicional) {
    let totaldeTarefas = Number(localStorage.getItem("totaldetarefas")) + Number(adicional)
    localStorage.setItem("totaldetarefas", totaldeTarefas)
}
function atualizarConcluidas(adicional) {
    let concluidasAtual = Number(localStorage.getItem("progressoSalvo")) + Number(adicional)
    localStorage.setItem("progressoSalvo", concluidasAtual)
}

let progressoInicial = localStorage.getItem("progressoSalvo")
let total = localStorage.getItem("totaldetarefas")


function atualizarProgresso() {

    let progressoInicial = Number(localStorage.getItem("progressoSalvo"))// ele atualiza o progresso inicial , junto com o progresso salvo //
    let total = Number(localStorage.getItem("totaldetarefas"))//e esse salva o total real junto com o inicial //

    let progressoReal = (progressoInicial / total) * 100

    localStorage.setItem("produtividade", progressoReal)
}


let progresso = localStorage.getItem("produtividade")

let produtividadeText = document.getElementById("Produtividade")
produtividadeText.innerHTML = Math.min(Number(progresso), 100).toFixed(0) + "%"
// ========================= METAS =======================
let metasContainer = document.getElementById("metasContainer")

// CARREGAR METAS SALVAS
let metasSalvas = localStorage.getItem("metasSalvas")

if (metasSalvas) {
    metasContainer.innerHTML = metasSalvas
}

// CONTADOR DE METAS
let totalMetas = Number(localStorage.getItem("totalMetas")) || 0

metas.innerHTML = totalMetas

function criarMeta() {

    let nomeMeta = document.getElementById("metasName").value
    let prazoMeta = document.getElementById("metaTemp").value
    let objetivoMeta = document.getElementById("metasObjective").value

    // VALIDAÇÃO
    if (!nomeMeta || !prazoMeta || !objetivoMeta) {

        document.getElementById("alertErro").style.display = "flex"

        setTimeout(() => {

            document.getElementById("alertErro").style.display = "none"

        }, 3000)

        return
    }

    // CRIAR META
    metasContainer.innerHTML += `

    <div class="col-md-6 scroll-reveal">

        <div class="goal-card p-4">

            <div class="d-flex justify-content-between align-items-start mb-3">

                <div>

                    <h4 class="goal-title mb-1">
                        ${nomeMeta}
                    </h4>

                    <span class="font-sm text-muted">
                        Prazo: ${prazoMeta}
                    </span>

                </div>

                <span class="goal-percentage text-purple fw-bold">
                    META
                </span>

            </div>

            <p class="text-muted mb-0">
                ${objetivoMeta}
            </p>

        </div>

    </div>
    `

    // SALVAR METAS
    localStorage.setItem("metasSalvas", metasContainer.innerHTML)

    // ATUALIZAR TOTAL
    totalMetas++

    metas.innerHTML = totalMetas

    localStorage.setItem("totalMetas", totalMetas)

    // ALERT SUCESSO
    document.getElementById("alertBox").style.display = "flex"

    setTimeout(() => {

        document.getElementById("alertBox").style.display = "none"

    }, 3000)

    // LIMPAR CAMPOS
    document.getElementById("metasName").value = ""
    document.getElementById("metaTemp").value = ""
    document.getElementById("metasObjective").value = ""

}