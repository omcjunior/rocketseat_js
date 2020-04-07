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