/* Os parâmetros servem para auxiliar em alguma lógica no código dentro de uma função. 
Por exemplo, uma função calculaMedia(), pode ter como parâmetros notaA e notaB, que serão os valores utilizados para serem caclulados e retornar o valor da média. */

/* 
O while é uma estrutura de repetição que foi necessária para trabalhar com a lista de teclas. Esta estrutura possibilita 
que uma variável de contador tenha seu valor incrementado a cada repetição, e que pode ser utilizado para acessar os indices 
de uma lista além de ser comparado com o tamanho de lista, formando a condição para a repetição cessar. Depende de um fator externo para funcionar. EX:contador */
/* 
função anonima é usada quando preciso utilizar um parametro na função, mas não posso chamar a função imediatamente. */

function tocaSom(idAudio) {
  document.querySelector(idAudio).play();
}

const listaSom = document.querySelectorAll(".tecla");

let contador = 0;

/* while (contador < listaSom.length) {
  const tecla = listaSom[contador];
  const id = tecla.classList[1];

  const idAudio = `#som_${id}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador = contador + 1;
} */

for (let contador = 0; contador < listaSom.length; contador++) {
  const tecla = listaSom[contador];
  const id = tecla.classList[1];

  const idAudio = `#som_${id}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function () {
    tecla.classList.add("ativa");
  };
}
