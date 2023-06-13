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
      value: 2,
      message: 'A quantidade de caracteres máxima é 2'
    },
     min: {
      value: 5,
      message: 'O valor minimo é 5'
    },
    max: {
      value: 12,
      message: 'O valor maximo é 2'
    },
          
  },

  data_fim:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 20,
      message: 'A quantidade de caracteres máxima é 20'
    } 
  }

  }


export default semestreValidator