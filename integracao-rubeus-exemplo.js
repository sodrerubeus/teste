function enviarContatoRubeus() {
    data = {
		nome: document.getElementById("input_nome").value,
        emailPrincipal: document.getElementById("input_email").value,
        telefonePrincipal: document.getElementById("input_telefone").value,
        token: "91634723ef8a09cd0f550f50aa51b53e",
        origem: 12 // Subistituir pela origem referente ao token
    };

    RBTracking.sendData(data, callbackPessoa);
}

function callbackPessoa(resposta) {
    var codPessoa = resposta.data.id;

    var evento = {
        pessoa: {id: codPessoa},
        token: "91634723ef8a09cd0f550f50aa51b53e",
        origem: 12 // Subistituir pela origem referente ao token
        tipo: "117"
    };

    RBTracking.sendEvent(evento, callbackEvento);
}

function callbackEvento() {
    /**
     * adicionar o que for desejado no callback para
     * executar a proxima ação.
     */
    console.info("Evento cadastrado com sucesso!");
}

function callbackError() {
    console.error("alguma coisa deu errado!");
}
