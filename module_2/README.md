# Exercícios: Módulo 02

## 1º exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela.

### Resultado
```javascript
<div id="grid">
    
</div>

<button id="btn">Gera Quadrado</button>

<script>
    var btnElement = document.querySelector('#btn')

    btnElement.onclick = function () {
        var qddElement = document.createElement('div');
        qddElement.style.width = '100px';
        qddElement.style.height = '100px';
        qddElement.style.backgroundColor = '#f00';

        var gridElement = document.querySelector('#grid');
        gridElement.appendChild(qddElement);

    }

</script>
```


## 2º exercício

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```javascript
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor();
```

### Resultado
```javascript
<button id="btn">Gera Quadrado</button>
<div id="grid" style="display: block;"></div>

<script>
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var newColor = getRandomColor();
    var btnElement = document.querySelector('#btn')
    var gridElement = document.querySelector('#grid');
    var qddElement = document.querySelector('div#grid div')

    btnElement.onclick = function () {
        var qddElement = document.createElement('div');
        qddElement.style.width = '100px';
        qddElement.style.height = '100px';
        qddElement.style.backgroundColor = '#f00';
        qddElement.style.float = 'left';
        gridElement.appendChild(qddElement);
        qddElement.onmouseover = function () {
            qddElement.style.backgroundColor = getRandomColor();
        }
    }
</script>
```


## 3º exercício

A partir do seguinte vetor:

```javascript
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:

● Diego
● Gabriel
● Lucas

### Resultado
```javascript
<ul id="lista"></ul>
<script>
  var createItem = function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    return li;
  }
  var liElement = function () {
    var nomes = ["Diego", "Gabriel", "Lucas"];
    var ul = document.querySelector('#lista');
    for (obj in nomes) {
        ul.appendChild(createItem(nomes[obj]));
    }
  }
  liElement();
</script>
```


## 4º exercício

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

```html
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais itens anteriores. 

Além disso, o conteúdo do input deve ser apagado após o clique.


### Resultado
```javascript
<input type="text" name="nome">
<button>Adicionar</button>
<ul id="lista"></ul>
<script>
  var createItem = function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    return li;
  }

  var liElement = function () {
    var nomes = ["Diego", "Gabriel", "Lucas"];
    var ul = document.querySelector('#lista');
    for (obj in nomes) {
      console.log(nomes[obj] + "\n");
      ul.appendChild(createItem(nomes[obj]));
    }
  }
  var nome = document.querySelector('input[name=nome]');
  var btnAdd = document.querySelector('button');
  btnAdd.onclick = function() {
    console.log(nome.value);
    var ul = document.querySelector('#lista');
    ul.appendChild(createItem(nome.value));
  }
  liElement();
</script>
```