// Função para alternar visualização das tarefas
function togglePhase(phaseId) {
    var tasksDiv = document.getElementById('tasks-' + phaseId);
    
    if (tasksDiv.classList.contains('active')) {
        tasksDiv.classList.remove('active');
    } else {
        tasksDiv.classList.add('active');
    }
}

// Dados das fases
var phases = [
    {
        id: 1,
        name: "PREPARAÇÃO INICIAL",
        duration: "Semana 1",
        start: 0,
        length: 1,
        color: "color-blue",
        tasks: [
            "Criar conta vendedor no Mercado Livre",
            "Vincular conta bancária e configurar recebimentos",
            "Estudar políticas e regras do Mercado Livre",
            "Analisar concorrência (preços, descrições, fotos)",
            "Definir estratégia de precificação"
        ]
    },
    {
        id: 2,
        name: "ESTRUTURAÇÃO DE CADASTROS",
        duration: "Semanas 2-3",
        start: 1,
        length: 2,
        color: "color-green",
        tasks: [
            "Fotografar todos os produtos (fundo branco, múltiplos ângulos)",
            "Criar descrições detalhadas e otimizadas para SEO",
            "Definir códigos SKU para controle de estoque",
            "Preparar tabela de medidas e especificações técnicas",
            "Criar templates de descrição padrão"
        ]
    },
    {
        id: 3,
        name: "CADASTRO DE PRODUTOS",
        duration: "Semana 3-4",
        start: 2.5,
        length: 1.5,
        color: "color-purple",
        tasks: [
            "Cadastrar primeiros 10-15 produtos principais",
            "Configurar variações (tamanhos, fragrâncias, etc)",
            "Definir estoque disponível para cada produto",
            "Configurar frete (Mercado Envios)",
            "Estabelecer preços e promoções iniciais"
        ]
    },
    {
        id: 4,
        name: "LOGÍSTICA E OPERAÇÃO",
        duration: "Semana 4",
        start: 3.5,
        length: 1,
        color: "color-orange",
        tasks: [
            "Organizar área de separação e embalagem",
            "Comprar materiais de embalagem (caixas, plástico bolha, fita)",
            "Criar processo de embalagem padronizado",
            "Testar envio com Mercado Envios",
            "Configurar integrações de estoque (se aplicável)"
        ]
    },
    {
        id: 5,
        name: "LANÇAMENTO E OTIMIZAÇÃO",
        duration: "Semana 5-6",
        start: 4,
        length: 2,
        color: "color-red",
        tasks: [
            "Ativar todos os anúncios simultaneamente",
            "Configurar anúncios patrocinados nos produtos principais",
            "Monitorar primeiras vendas e feedback",
            "Ajustar preços conforme performance",
            "Responder todas as perguntas em até 2 horas"
        ]
    },
    {
        id: 6,
        name: "EXPANSÃO DO CATÁLOGO",
        duration: "Semanas 6-8",
        start: 5.5,
        length: 2.5,
        color: "color-indigo",
        tasks: [
            "Cadastrar produtos complementares",
            "Criar kits e combos promocionais",
            "Adicionar produtos de maior margem",
            "Expandar variações dos produtos mais vendidos",
            "Testar novos nichos dentro de barbearia"
        ]
    },
    {
        id: 7,
        name: "CONSOLIDAÇÃO E CRESCIMENTO",
        duration: "Semanas 8-12",
        start: 7.5,
        length: 4.5,
        color: "color-teal",
        tasks: [
            "Alcançar reputação verde/laranja",
            "Implementar melhorias baseadas em feedback",
            "Avaliar possibilidade de Mercado Livre Full",
            "Expandir investimento em anúncios patrocinados",
            "Desenvolver relacionamento com clientes recorrentes"
        ]
    }
];

// Inicialização quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Criar cabeçalho de semanas
    var weeksHeader = document.getElementById('weeks-header');
    for (var i = 1; i <= 12; i++) {
        var week = document.createElement('div');
        week.className = 'week';
        week.textContent = 'S' + i;
        weeksHeader.appendChild(week);
    }

    // Criar fases
    var phasesContainer = document.getElementById('phases-container');
    
    for (var p = 0; p < phases.length; p++) {
        var phase = phases[p];
        var phaseDiv = document.createElement('div');
        phaseDiv.className = 'phase';
        
        var leftPosition = (phase.start / 12) * 100;
        var width = (phase.length / 12) * 100;
        
        // Criar células do grid
        var gridCells = '';
        for (var i = 0; i < 12; i++) {
            gridCells += '<div class="grid-cell"></div>';
        }
        
        // Criar lista de tarefas
        var tasksList = '';
        for (var t = 0; t < phase.tasks.length; t++) {
            tasksList += '<li class="task-item">';
            tasksList += '<span class="task-check">✓</span>';
            tasksList += '<span>' + phase.tasks[t] + '</span>';
            tasksList += '</li>';
        }
        
        // Montar HTML da fase
        var phaseHTML = '';
        phaseHTML += '<div class="phase-header" onclick="togglePhase(' + phase.id + ')">';
        phaseHTML += '<div class="phase-info">';
        phaseHTML += '<div class="phase-name">' + phase.name + '</div>';
        phaseHTML += '<div class="phase-duration">' + phase.duration + '</div>';
        phaseHTML += '</div>';
        phaseHTML += '<div class="phase-chart">';
        phaseHTML += '<div class="phase-grid">' + gridCells + '</div>';
        phaseHTML += '<div class="phase-bar ' + phase.color + '" style="left: ' + leftPosition + '%; width: ' + width + '%;">';
        phaseHTML += phase.duration;
        phaseHTML += '</div>';
        phaseHTML += '</div>';
        phaseHTML += '</div>';
        phaseHTML += '<div class="phase-tasks" id="tasks-' + phase.id + '">';
        phaseHTML += '<h4>Tarefas:</h4>';
        phaseHTML += '<ul class="task-list">' + tasksList + '</ul>';
        phaseHTML += '</div>';
        
        phaseDiv.innerHTML = phaseHTML;
        phasesContainer.appendChild(phaseDiv);
    }
});
```

---

## **Estrutura de pastas no GitHub:**
```
cronograma-ml-gilnei/
├── index.html
├── style.css
├── script.js
└── README.md (opcional)
