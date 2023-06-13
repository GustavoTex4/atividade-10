const cursoValidator= {
    nome:{ 
    required : 'O campo é obrigatório',
    minLength: {
      value: 3,
      message: 'A quantidade de caracteres minima é 3'
    },
    maxLength: {
      value: 10,
      message: 'A quantidade de caracteres máxima é 10'
    } 
},
duracao: {
    required : 'O campo é obrigatório',
     min: {
      value: 5,
      message: 'O valor minimo é 5'
    },
    max: {
      value: 12,
      message: 'O valor maximo é 12'
    },
          
  },

  modalidade:{
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


export default cursoValidator