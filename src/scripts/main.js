

function capturarDados() {
    const condominio = document.getElementById("condominio").value;
    const nomeOrganizador = document.getElementById("nomeOrganizador").value;
    const data = document.getElementById("data").value;
    const primeiraChamada = document.getElementById("primeiraChamada").value;
    const segundaChamada = document.getElementById("segundaChamada").value;
    const virtual = document.getElementById("virtual").value;

    alert("Dados capturados:\nCondomínio: " + condominio + 
          "\nNome do Organizador: " + nomeOrganizador + 
          "\nData: " + data + 
          "\nPrimeira Chamada: " + primeiraChamada + 
          "\nSegunda Chamada: " + segundaChamada + 
          "\nVirtual: " + virtual);

    return { condominio, nomeOrganizador, data, primeiraChamada, segundaChamada, virtual };
}
