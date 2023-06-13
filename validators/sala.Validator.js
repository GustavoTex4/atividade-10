const salaValidator= {
    nome:{ 
    required : 'O campo é obrigatório',
    minLength: {
      value: 5,
      message: 'A quantidade de caracteres minima é 5'
    },
    maxLength: {
      value: 10,
      message: 'A quantidade de caracteres máxima é 10'
    } 
},
capacidade: {
    required : 'O campo é obrigatório',
    min: {
      value: 10,
      message: 'O valor minimo é 10'
    },
    max: {
      value: 50,
      message: 'O valor maximo é 50'
    },
          
  },

  tipo:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 20,
      message: 'A quantidade de caracteres máxima é 20'
    }, 
    minLength: {
      value: 5,
      message: 'A quantidade de caracteres minimo é 5'
  }

  }
}


export default salaValidator