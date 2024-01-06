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