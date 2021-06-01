const calculadora ={
    somar(a,b){
        resultado = a + b;
        return resultado;
    },
        somarNumeros(...numeros){
            let resultado = 0
            for(let i = 0; i < numeros.length; i++){
              resultado = numeros[i] + resultado 
          }
          return resultado
        },

        subtracao(a,b){
            resultado = a - b;
            return resultado
        },

        subtracaoNumeros(...numeros){
            let resultado = numeros[0]
            for(let i = 1; i < numeros.length; i++){
                resultado = resultado - numeros[i] 
            }
            return resultado
        },

        multiplicacao(a,b){
            resultado = a * b;
            return resultado
        },

        multiplicarNumeros(...numeros){
            let resultado = 1
            for(let i = 0; i < numeros.length; i++){
                resultado = numeros[i] * resultado
            }
            return resultado
        },

        divisao(a,b){
            resultado = a / b;
            return resultado
        },

        divisaoNumeros(...numeros){
            let resultado = numeros[0]
            for(let i = 1; i < numeros.length; i++){
                resultado = resultado / numeros[i]
            }
            return resultado
        }

        
        
}

module.exports= calculadora
