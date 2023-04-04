/* This is a user service. Every user has an ID and a name. */

interface User {
    id: number;
    name: string;
}

const users: User[] = [
  {id: 1, name: "Pedro Vieira"},
  {id: 2, name: "João Silva"},
  {id: 3, name: "Maria Santos"},
  {id: 4, name: "Ana Sousa"},
  {id: 5, name: "Rui Costa"},
  {id: 6, name: "Sofia Carvalho"},
  {id: 7, name: "Miguel Almeida"},
  {id: 8, name: "Joana Pereira"},
  {id: 9, name: "Ricardo Gomes"},
  {id: 10, name: "Catarina Martins"},
];

export function getAllUsers(): User[] {
  return [...users];
}

export function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}
