function backRed(x) {
    x.style.backgroundColor = "red";
}

function backSalmon(x) {
    x.style.backgroundColor = "darksalmon";
}

function backWhite(x) {
    x.style.backgroundColor = "white";
}

var passaValor = function() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var prioridade = document.getElementById("prioridade").value;
    var mensagem = document.getElementById("mensagem").value;
    window.location = "contatoConfirmado.html?nome=" + nome +
        "&email=" + email +
        "&telefone=" + telefone +
        "&prioridade=" + prioridade +
        "&mensagem=" + mensagem;
}

function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = decodeURIComponent(params[i].substring(params[i].indexOf('=') + 1));
        }
    }
    if (param_value) {
        return param_value;
    } else {
        return undefined;
    }
}


var confirmaEnvio = function() {
    document.getElementById("nome").innerHTML = "Nome: " + queryString("nome");
    document.getElementById("email").innerHTML = "E-mail: " + queryString("email");
    document.getElementById("telefone").innerHTML = "Telefone: " + queryString("telefone");
    document.getElementById("prioridade").innerHTML = "Prioridade: " + queryString("prioridade");
    document.getElementById("mensagem").innerHTML = "Mensagem: " + queryString("mensagem");

}