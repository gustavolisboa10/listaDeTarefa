
alert('Atenção as regras: \n' +
      '1- Add as tarefas clicando no btn add. \n' +
      '2- clique uma vez para traçar a tarefa ja feita. \n' +
      '3- clique duas vezes para remover a tarefa.'   

)

//proximo passo do projeto, colocar um text decoretion no texto e remover todos os items que tiverem com isso, atraves do botao.
const btnAdd1 = document.getElementById('btnAdd1')

let novaTarefa = document.getElementById('novaTarefa')

function addNewTask(){

const input = document.getElementById('entrada')
const btnAdd1 = document.getElementById('btnAdd1')


let paragrafo = document.createElement('p')
novaTarefa.appendChild (paragrafo)
paragrafo.innerText = input.value
input.value =''

paragrafo.addEventListener('click',function (){
paragrafo.style.textDecoration = ('line-through red 3px')

paragrafo.addEventListener('dblclick',function(){
novaTarefa.removeChild(paragrafo)
})

})
}

btnAdd1.addEventListener('click',function(){

alert('ATENÇÃO AS REGRAS: \n' +
      '\n'+
      '1- Add as tarefas clicando no btn add. \n' +
      '\n'+
      '2- clique uma vez para traçar a tarefa ja feita. \n' +
      '\n'+
      '3- clique duas vezes para remover a tarefa.'  


)


})
