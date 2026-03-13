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