type user = {
  name: string,
  age: number,
  address: {
    street: string,
    number: number,
  }
}

//typescript aceita objetos dentro de objetos e também type dentro de type seguindo exemplo abaix
type addressExemple = {
  street: string,
  number: number
}

type userExemple = {
  name: string,
  age: number,
  address: addressExemple
}

//caso um valor seja opcional dentro de um type basta colocar um "?" antes dos 2 pontos assim o valor torna-se opcional
// biblioteca npm i tsx = faz com que você compile código em TypeScript diretamente sem a necessidade de converter para código javascript

const newUser: user = {
  name: 'Vitor',
  age: 23,
  address: {
    street: 'Rua flamingo',
    number: 200
  }
}
//Para resolver os erros de retorno do tipo any podemos usar criar as chaves que se baseiam no erro abaixo de exemplo
/*
   Element implicitly has an any type because expression of type string can't be used to index type user
   No index signature with a parameter of type string was found on type user
 */
// Esse erro trata-se de que estamos passando uma string que nela contem o nome da propriedade e qual buscamos, entretanto o valor dessa string pode ser qualquer um, caso não nós não definirmos quais são as chaves da propriedade a qual estamos querendo determinado valor.
// para resolver isso utilizamos o KeyOf que pega todas as chaves de um type ou de uma interface. seguindo exemplo abaixo

type userProperties = keyof User;
function pickProperty(user: user, property: userProperties){
  return user[property];
}

console.log(pickProperty(newUser, "name"));