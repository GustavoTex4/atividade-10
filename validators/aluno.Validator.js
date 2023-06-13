const alunoValidator= {
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
cpf: {
    required : 'O campo é obrigatório',
    minLength: {
      value: 11,
      message: 'A quantidade de caracteres minimo é 11'
    },
    maxLength: {
      value: 11,
      message: 'A quantidade máxima de caracteres é 11'
    },
          
  },

  matricula:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 11,
      message: 'A quantidade de caracteres máxima é 11'
    } 
  },
  email:{
    required : 'O campo é obrigatório',
    
  },
  telefone:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 11,
      message: 'A quantidade de caracteres máxima é 11'
    },
    minLength: {
      value: 11,
      message: 'A quantidade de caracteres minimo é 11'
    },
  },
 cep:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 8,
      message: 'A quantidade de caracteres máxima é 8'
    },
    minLength: {
      value: 8,
      message: 'A quantidade de caracteres minimo é 8'
    },
    
  },
 logradouro:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 20,
      message: 'A quantidade de caracteres máxima é 20'
    } 
  },
  complemento:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 30,
      message: 'A quantidade de caracteres máxima é 30'
    },
    minLength: {
      value: 10,
      message: 'A quantidade de caracteres minimo é 10'
    },
  },
  numero:{
    required : 'O campo é obrigatório',
    max: {
      value: 100,
      message: 'maximo é 10'
    },
    min: {
      value: 10,
      message: 'minimo é 10'
    }  
  },
 bairro:{
    required : 'O campo é obrigatório',
    maxLength: {
      value: 20,
      message: 'A quantidade de caracteres máxima é 20'
    },
    minLength: {
      value: 5,
      message: 'A quantidade de caracteres máxima é 20'
    } 

  }
  }


export default alunoValidator