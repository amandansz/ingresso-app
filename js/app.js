function comprar(){
   let tipo = document.getElementById('tipo-ingresso');
   let qtd = parseInt(document.getElementById('qtd').value);

   //Verificação que confere se a quantidade inserida pelo usuário seja um número positivo.
  if (isNaN(qtd) || qtd <= 0 ){
    alert('Por favor, insira uma quantidade válida (número positivo).');
    return;
  }

   if(tipo.value == 'pista'){
       comprarPista(qtd);
  } else if (tipo.value == 'superior'){
       comprarSuperior(qtd);
  } else {
       comprarInferior(qtd);
  } 

  }
  
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
         alert('Quantidade indisponível para ingresso pista. Por favor, coloque uma quantidade de ingresso válido!');
    } else {
      qtdPista = qtdPista - qtd;
      document.getElementById('qtd-pista').textContent = qtdPista;
      alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior= parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
         alert('Quantidade indisponível para ingresso cadeira superior.Por favor, coloque uma quantidade de ingresso válido!');
    } else {
      qtdSuperior = qtdSuperior - qtd;
      document.getElementById('qtd-superior').textContent = qtdSuperior;
      alert('Compra realizada com sucesso!');
    }

}
function comprarInferior(qtd){
   let qtdInferior= parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
         alert('Quantidade indisponível para ingresso cadeira inferior.Por favor, coloque uma quantidade de ingresso válido!');
    } else {
      qtdInferior = qtdInferior - qtd;
      document.getElementById('qtd-inferior').textContent = qtdInferior;
      alert('Compra realizada com sucesso!');
    }

}


  
