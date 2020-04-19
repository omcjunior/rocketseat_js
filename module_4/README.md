# Exercícios: Módulo 04

## 1º exercício

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve cair no .then, caso contrário, no .catch

```javascript
function checaIdade(idade) {
  // Retornar uma promise
}

checaIdade(20)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
```

### Resultado
```javascript
  var checaIdade = function (idade) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (idade > 18) {
                  resolve(true);
              } else {
                  reject(true);
              }
          }, 2000);
      });
      // Retornar uma promise
  }

  checaIdade(17)
      .then(function () {
          console.log("Maior que 18");
      })
      .catch(function () {
          console.log("Menor que 18");
      });
```


## 2º exercício

Crie uma tela com um **input** que deve receber o nome de um usuário no Github. Após digitar o nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos/

Basta alterar "diego3g" pelo nome do usuário.

```html
<input type="text" name="user">
<button onclick="">Adicionar</button>
```

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

```html
<ul>
  <li>repo1</li>
  <li>repo2</li>
  <li>repo3</li>
  <li>repo4</li>
  <li>repo5</li>
</ul>
```

### Resultado
```html
<h1>Modulo 4 - Exercicio 4</h1>
<input type="text" name="user" id="user">
<button>load user...</button>
<ul id="listrepo"></ul>
<div id="out"></div>
```

```javascript
<script>
    var inputElement = document.querySelector('input[name=user]');
    var btnElement = document.querySelector('button');
    var outElement = document.querySelector('#out');
    var ulElement = document.querySelector('ul#listrepo');

    btnElement.onclick = function () {
        var usergit = inputElement.value || 'diego3g';
        var urlgit = "https://api.github.com/users/" + usergit + "/repos";
        loadUserGit(urlgit);
    }

    var loadUserGit = function (url) {
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                //outElement.innerHTML = generateSuccessHTMLOutput(response);
                rederList(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                outElement.innerHTML = generateErrorHTMLOutput(error);
            })
            .then(function () {
                // always executed
            });
    }

    var rederList = function(list) {
        ulElement.innerHTML = '';
        for(item of list) {
            createRepo(item.name);
        }
    }

    var createRepo = function(describe) {
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(describe);
        liElement.appendChild(textElement);
        ulElement.appendChild(liElement);
    }

    function generateSuccessHTMLOutput(response) {
        return '<h4>Result</h4>' +
            '<h5>Status:</h5> ' +
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
    }

    function generateErrorHTMLOutput(error) {
        return '<h4>Result</h4>' +
            '<h5>Message:</h5> ' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5> ' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
    }
</script>
```

## 3º exercício
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no luga

### Resultado

```
Utilizei a estrutura do exercício 2 para incluir o indicador de carregamento.
```