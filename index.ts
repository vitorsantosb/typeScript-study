type user = {
  id: any
  name?: string,
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


//Quando utilizamos typeof em uma constante javascript conseguimos converter esse objeto para um objeto tipado em TypeScript
//O Typescript possibilita a união de métodos para melhor especificarmos o que queremos na conversão de objeto javascript para typescript seguindo exemplo abaixo

const video = {
  title: 'Titulo',
  duration: 180,
}

type Video = keyof typeof video;

//Utility Types
//Funções que podem receber parametros.

//parametro no typeScript é chamado de Generics
type PickPropertyReturnType = ReturnType<typeof pickProperty>;

//Caso eu queira remover informações do meu type ou da minha interface eu posso utilizar a função <Omit> para Omitir dados e remover dados indesejados.
type UserWithoutAddress = Omit<User, 'address'>

//Caso eu queira remover mais de um valor basta colocar da seguinte forma
type UserWithoutNameAndAddress = Omit<User, 'name'  | 'address'>

//Pegando propriedades especificas de um objeto.

type UserNameAndAddress = Pick<User, 'name'>

//Partial ele copia uma tipagem e define que todas aquelas keys são opcionais.
//Utilidade: Factory's - criação de usuários fakes e afins.

type UserPartial = Partial<User>

//------------------------------------

type DbConfig = {
  name: string,
  url: string
  timeout?: number
}

// 'as' Força uma tipagem - Obriga que o objeto que está sendo criado seja do tipo DbConfig mesmo que o objeto esteja vazio. NÃO É O IDEAL
const conn1 = { name: 'postgres', url: 'postgres://localhost:8080'} as DbConfig;

// param <name>: type = Faz com que o novo objeto tenha as propriedades do type escolhido entretanto você não obtem os valores atuais do mesmo. Mas sim os tipos de retorno que podem ser enviados
const conn2: DbConfig = {name: 'mysql', url: 'mysql://localhost:8080'};
const mysqlConnName = conn2.name;
//dessa forma você não consegue receber o valor completo caso esteja implementado, mas sim o tipo que pode vir caso você receba.


// satisfies: Faz a união das 2 formas acima.
const conn3 = {name: 'sqlite', url: 'sqlite://localhost:8080', timeout: 5000} satisfies DbConfig;
const sqliteTimeout = conn3.timeout;



//Funções Generics - Como fazer uma função que pode receber N tipos de type e interfaces e pegar os valores de chave que nós especificarmos e retorna o mesmo
//Generics são variáveis internas do typescript

//Record: Faz com que você especifique o que você quer que entre na função;
//Sempre que a função pickProperty for chamada todos os objetos que entram nela precisam ser OBJECTS que contenham chaves do tipo STRING e que possuam qualquer valor(any);
function pickProperty<ObjType extends Record<string, any>>(obj: ObjType, property: keyof ObjType){
  return obj[property];
}

pickProperty(video, "title");
