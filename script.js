function pegarTexto() {
    return document.getElementById("entradaTexto").value;
}

function criptografarTexto() {
    let texto = pegarTexto();
    texto = texto.toLowerCase(); // Converte para minúsculas
    texto = texto.replace(/[^a-z\s]/g, ""); // Remove números, acentos e caracteres especiais
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoCriptografado);
}

function descriptografarTexto() {
    let texto = pegarTexto();
    texto = texto.toLowerCase(); // Converte para minúsculas
    texto = texto.replace(/[^a-z\s]/g, ""); // Remove números, acentos e caracteres especiais
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDescriptografado);
}

function mostrarResultado(texto) {
    let resultado = document.getElementById("textoResultado");
    resultado.innerHTML = `<p class="naoEncontrouMensagem">${texto}</p>`;
    document.querySelector(".botao-copiar").style.display = "block";
}

function copiarParaTransferencia() {
    let textoResultado = document.querySelector("#textoResultado p").innerText;
    //navigator.clipboard.writeText(textoResultado).then(() => {
    //    alert("Texto copiado para a área de transferência!");
    //});
}

function limparCampo(){
    document.getElementById("entradaTexto").value = "";
}
