const disciplinaValidator= {
    disciplina:{ 
    required : 'O campo é obrigatório',
    minLength: {
      value: 3,
      message: 'A quantidade de caracteres minima é 3'
    },
    maxLength: {
      value: 16,
      message: 'A quantidade de caracteres máxima é 16'
    } 
},
curso: {
  required : 'O campo é obrigatório',
  minLength: {
    value: 3,
    message: 'A quantidade de caracteres minima é 3'
  },
  maxLength: {
    value: 10,
    message: 'A quantidade de caracteres máxima é 10'
  } 
          
  }
  }


export default disciplinaValidator