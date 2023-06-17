const semestreValidator= {
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
data_inicio: {
    required : 'O campo é obrigatório',
    maxLength: {
      value: 10,
      message: 'A quantidade de caracteres máxima é 10'
    },
     minLength: {
      value: 8,
      message: 'A quantidade de caracteres minima é 8'
    },  
  },

  data_fim:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 10,
      message: 'A quantidade de caracteres máxima é 10'
    },
     minLength: {
      value: 8,
      message: 'A quantidade de caracteres minima é 8'
    },  
  }
  }


export default semestreValidator