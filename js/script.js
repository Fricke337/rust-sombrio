// Função para o botão de Login da Steam
function loginSteam() {
    // Por enquanto, apenas um alerta técnico para o usuário
    const mensagem = "Conexão com Steam API detectada.\nRedirecionando para o servidor de autenticação OpenID...";
    alert(mensagem);
    
    // Log para console do navegador (F12)
    console.log("Iniciando fluxo de login. Aguardando integração com Back-end Java/C#.");
}

// Função para copiar o IP do servidor 
function copiarIP() {
    const ip = "123.456.78.90:28015"; 
    navigator.clipboard.writeText(ip);
    alert("IP do Rust Sombrio copiado: " + ip);
}

// Preços da diária de cada plano
const precosBase = {
    bronze: 3.00,
    prata: 5.00,
    ouro: 8.00
};

function calcularTotal(plano) {
    const precosBase = { bronze: 3.0, prata: 5.0, ouro: 8.0 };
    const input = document.getElementById(`dias-${plano}`);
    const displayPreco = document.getElementById(`preco-${plano}`);
    const labelDias = document.getElementById(`label-dias-${plano}`); // Onde diz "30 dias"

    let dias = parseInt(input.value);

    // Validação básica para não ficar vazio ou negativo
    if (isNaN(dias) || dias < 1) {
        dias = 1;
    }

    const total = precosBase[plano] * dias;

    // 1. Atualiza o valor em Reais
    displayPreco.innerText = total.toLocaleString('pt-br', {minimumFractionDigits: 2});
    
    // 2. AQUI ESTÁ O TRUQUE: Atualiza o texto da descrição para bater com o input
    if (labelDias) {
        labelDias.innerText = dias;
    }
}