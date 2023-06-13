const professorValidator= {
    nome:{ 
    required : 'O campo é obrigatório',
    minLength: {
      value: 3,
      message: 'A quantidade de caracteres minima é 3'
    },
    maxLength: {
      value: 25,
      message: 'A quantidade de caracteres máxima é 25'
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
    message: 'A quantidade máxima  é 11'
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
    email:{
      required : 'O campo é obrigatório',
      
    },
  },
 salario:{
    required : 'O campo é obrigatório',
    max: {
      value: 20000,
      message: 'o maximo é 20000'
    },
    min: {
      value: 15000,
      message: 'o minimo é 1500'
    }  
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
      message: 'maximo é 100'
    },
    min: {
      value: 10,
      message: 'maximo é 10'
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
      message: 'A quantidade de caracteres minima é 5'
    } 
  }
  }


export default professorValidator