//Interface

/**
 * Interface:
 * Ideais para definir a estrutura de um objeto ou classes, as interfaces são ótimas para desenvolver
 *  um projeto aberto para implementações e extensões de comportamento.
 */

interface VerifyToken {
  (token: string): boolean;
}

interface AuthContext {
  authToken: string;
  verifyToken: VerifyToken;
}

const authContext: AuthContext = {
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  verifyToken: (token) => token.length === 36,
}

/**
 * - Podem ser implementadas por classes
 *    Interfaces podem ser utilizadas para ajudar a estruturar suas classes, definindo estruturas genéricas que podem ser reutilizadas.
 */

interface Person {
  name: string;
}

class User implements Person {
  name = 'John Doe';
}

/**
 * São extensíveis
 * Você pode extender interfaces na declaração de outras interfaces.
 */

interface Person {
  name: string;
}

interface User extends Person {
  address: string;
}

const user: User = {
  name: 'John Doe',
  address: 'Brazil',
}

/**
 * - Permitem declaration merging
 * Declaration merging é uma forma de extender uma interface, porém de forma menos explícita.
 * Obs: Não é uma prática recomendada.
 */

interface PersonExemple {
  name: string;
}

interface PersonExemple {
  age: number;
}

const person: PersonExemple = {
  name: 'John Doe',
  age: 20,
}