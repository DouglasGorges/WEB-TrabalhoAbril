function mouseOver(x) {
    x.style.backgroundColor = "red";
}

function mouseOut(x) {
    x.style.backgroundColor = "darksalmon";
}

function gravarDados() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var prioridade = document.getElementById("prioridade").value;
    var mensagem = document.getElementById("mensagem").value;

    alert(
        "Nome: " + nome + "\n" +
        "Email: " + email);
}