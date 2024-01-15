const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    alert("Recebemos seu contato, retornaremos o mais breve possivel");

    formulario.reset();
  } else {
    alert(
      "Houve um erro: Verifique os campos digitados, se persistir entre em contato direto no email: comercial@soliduscontabil.com.br"
    );
  }
  const botao = document.querySelector(".btn-form");
  botao.disabled = false;
  botao.innerHTML = "Enviar Mensagem";
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector(".btn-form");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";

  const data = new FormData(formulario);

  fetch("/enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
  console.log(data);
}

formulario.addEventListener("submit", enviarFormulario);
