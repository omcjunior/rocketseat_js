var todoList = JSON.parse(localStorage.getItem('todoList')) || [];

var itemElement = document.querySelector('input[name=item]');
var btnElement = document.querySelector('button');
var ulElement = document.querySelector('ul');
var delElement = document.querySelector('ul li a');
var msgElement = document.querySelector('span#msg');

/** 
 * Criar item para lista de todo com tag <li>
 * @param {string} dsc - Descrição do item
 */
var createItem = function (dsc) {
    var li = document.createElement('li');
    var ds = document.createTextNode(dsc);
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    var pos = todoList.indexOf(dsc);
    a.setAttribute('onclick', 'removeItem(' + pos + ')');
    var linkElement = document.createTextNode('Excluir');
    a.appendChild(linkElement);

    li.appendChild(ds);
    li.appendChild(a);
    ulElement.appendChild(li);
}

/** Evento para adicionar um item */
btnElement.onclick = function () {
    logmsg("");
    if (itemElement.value == "") {
        logmsg("Favor informa a descrição da tarefa");
        return false;
    }
    var findItem = todoList.indexOf(itemElement.value);
    if (findItem >= 0) {
        logmsg("Já existe este tarefa na lista!");
    } else {
        addItem();
        itemElement.value = "";
    }

}

/** Renderiza a lista de itens */
var renderList = function () {
    ulElement.innerHTML = "";
    for (i of todoList) {
        createItem(i);
    }
}

/** Adiciona tarefa na lista */
var addItem = function(){
    todoList.push(itemElement.value);
    renderList();
    saveToStorage();
}

/** Remove tarefa da lista */
var removeItem = function(pos){
    todoList.splice(pos, 1);
    renderList();
    saveToStorage();
}

/** Mensagem de log para usuário */
var logmsg = function(msg){
    msgElement.innerHTML = msg;
}

/** Armazena no storage do browser, usando todoList como key */
var saveToStorage = function(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function main() {
    renderList();
}

main();