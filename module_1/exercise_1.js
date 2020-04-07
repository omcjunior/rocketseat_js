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
  
  console.log("------------------")
  main()