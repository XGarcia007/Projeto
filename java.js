
function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "home.html";
    } else {
        alert('Usuario ou senha incorretos');
    }

}





function iniciarComentarios() {

    const form = document.getElementById("form-comentario");
    const lista = document.getElementById("lista-comentarios");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const texto = document.getElementById("texto").value;
        const nota = document.getElementById("nota").value;

        const novoComentario = document.createElement("div");
        novoComentario.innerHTML = `<p><strong>${nome}</strong> (${nota} ⭐):<br>${texto}</p><hr>`;

        lista.appendChild(novoComentario);
        form.reset();
    });
}

function cadastrar() {


}







