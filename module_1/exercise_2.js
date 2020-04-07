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