# Exercícios: Módulo 01

## 1º exercício

Crie uma função que dado o objeto a seguir:

```javascript
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
```

Retorne o seguinte conteúdo:

```
O usuário mora em São Paulo / SP,no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
```

### Resultado

```javascript class:"lineNo"
// exercício 01
function getData() {
    /*
    Retorna a estrutura de dados multiples objects
    */
    var data = [
      {
        rua: 'Rua dos pinheiros',
        numero: 1293,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP',
      },
      {
        rua: 'Rua dos lirios',
        numero: 1293,
        bairro: 'Copacabana/',
        cidade: 'Rio de Janeiro',
        uf: 'SP',
      },
    ]
  
    return data
  }
  
  function getEndereco() {
    var data = getData()
    var result = ""
    for (var prop in data) {
      result += `O usuário mora em ${data[prop].cidade} / ` +
        `${data[prop].uf}, ` +
        `no Bairro ${data[prop].bairro}, ${data[prop].rua},` +
        `com N° ${data[prop].numero} \n\r`
    }
    return result
  }
  
  function main() {
    var r = getEndereco()
    console.log(r)
  }
  
  main()
```

## 2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```javascript
function pares(x, y) {
 // código aqui
}
pares(32, 321);
```

### Resultado

```javascript
function pares(num1, num2) {
  var out = []
  if (num2 > num1) {
    for (i = num1; i <= num2; i++) {
      if (i % 2 == 0) {
        out = out.concat(i)
      }
    }
  } else {
    console.log('O numero do segundo parametro deve ser maior que o primeiro!')
  }
  return out
}

function main() {
  var x = 32
  var y = 321
  var result = pares(x, y)
  console.log(pares(x, y))
}

main()
```

## 3º exercício

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

```javascript
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```

Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

### Resultado

```javascript
// exercício 03

function getData() {
  return ['Javascript', 'ReactJS', 'React Native']
}

function temHabilidade(skill) {
  var skills = getData()
  if (skills.indexOf(skill) >= 0) {
    return true
  }
  return false
}

function main() {
  var skill = 'Javascript'
  console.log(temHabilidade(skill)) // true ou false
}

main()
```

## 4º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```javascript
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

### Resultado

```javascript
function experiencia(ano) {
  var exper = 0
  if (ano <= 1) {
    exper = 'Iniciante'
  } else if (ano > 1 && ano <= 3) exper = 'Intermediário'
  else if (ano > 3 && ano <= 6) {
    exper = 'Avançado'
  } else {
    exper = 'Jedi Master'
  }
  return exper
}

function main() {
  var anosEstudo = 7
  console.log(experiencia(anosEstudo))
}

main()
```

## 5º exercício

Dado o seguinte vetor de objetos:

```javascript
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
```

Escreva uma função que produza o seguinte resultado:

```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array com um separador utilize o join.

### Resultado

```javascript
function getData() {
  var users = [
    {
      nome: 'Diego',
      habilidades: ['Javascript', 'ReactJS', 'Redux'],
    },
    {
      nome: 'Gabriel',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir'],
    },
  ]
  return users
}

/**
 * O Diego possui as habilidades: Javascript, ReactJS, Redux
 * O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
 */
function listUsers() {
  var data = getData()
  var out = ""
  for (var p in data) {
    out += `O ${obj[p].nome} possui as habilidades: ${obj[p].habilidades} \n\r`
  }
  return out
}

function main() {
  var result = listUsers()
  console.log(result)
}

main()
```