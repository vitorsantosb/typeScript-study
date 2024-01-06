/**
 * - Tipos (type aliases)
 * Permitindo criar “aliases” para primitivos, funções e objetos, os tipos (ou type aliases)
 * são ferramentas poderosas que podem expandir a tipagem do seu projeto a um nível muito avançado.
 */

type Token = string;
// @ts-ignore
type VerifyToken = (token: Token) => boolean;

// @ts-ignore
type AuthContext = {
  authToken: Token;
  verifyToken: VerifyToken;
}

// @ts-ignore
const authContext: AuthContext = {
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  verifyToken: (token) => token.length === 36,
}

/**
 * Permitem intersections e unions.
 * Pode-se considerar uma das maiores funcionalidades dos type aliases, as intersections e unions permitem combiná-los de várias formas.
 */

type Person = {
  name: string;
}

type Young = {
  hungry: boolean;
};

type User = Person & { address: string };
type Me = Person & Young;

const user: User = {
  name: 'John Doe',
  address: 'Brazil',
};

const me: Me = {
  name: 'Vinicius',
  hungry: true,
};

//link para melhor entendimento https://viniciusestevam.medium.com/principais-diferen%C3%A7as-entre-types-e-interfaces-em-typescript-a00c945e5357