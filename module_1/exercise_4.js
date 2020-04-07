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