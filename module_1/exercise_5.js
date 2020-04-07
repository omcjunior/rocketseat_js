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