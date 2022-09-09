const input = document.querySelector('.todo-input')
const btnadd = document.querySelector('.todo-button')
const todolist = document.querySelector('.todo-list')
const container = document.querySelector('.todo-container')
var contador = 0

btnadd.addEventListener('click', adcionar)

function adcionar() {
    var valorinput = input.value

    contador++

    if ((valorinput !== "") && (valorinput !== null) && (valorinput !== undefined)) {

        var novoItem = `<div id="${contador}" class="item">
<div onclick="itemfeito(${contador})" class="item-icone">
    <i id="icone_${contador}" class="fa-regular fa-circle"></i>
</div>
<div onclick="itemfeito(${contador})" class="item-nome">
    ${valorinput}
</div>
<div class="item-delete">
    <div class="lixeira">
    <i onclick="deletar(${contador})" class="fa-solid fa-trash"></i>
</div>
</div>
</div>`

        container.innerHTML += novoItem;
        input.value = ""
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function itemfeito(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe)

    if (classe == "item") {
        item.classList.add('feito')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('fa-circle')
        icone.classList.add('fa-circle-check')
    } else {
        item.classList.remove('feito')

        var icone = document.getElementById('icone_' + id)
        icone.classList.add('fa-circle')
        icone.classList.remove('fa-circle-check')
    }

}
