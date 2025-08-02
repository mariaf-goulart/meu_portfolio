const form = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const msg = document.querySelector("#msg");
const bt = document.querySelector("#bt");
const resp = document.querySelector("#resp");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");
const confirmDialog = document.querySelector("#confirmDialog");

bt.addEventListener("click", exibirMensagem);
confirmDialog.addEventListener('click', fecharMensagem);

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

function exibirMensagem() {
    if (nome.value && email.value && assunto.value && msg.value) {
        mensagemSucesso.innerHTML = "Formulário enviado com sucesso!";
        resp.classList.remove("hidden");
        resp.classList.add("show");
        return;
    } 
    alert("Preenchimento obrigatório dos campos.");
}

function fecharMensagem(){
    resp.classList.remove("show");
    resp.classList.add("hidden");
}