type userDbExemple = {
  readonly id: string,
  name: string,
  age: number,
}

function PersistUser(userDbExemple: Omit<userDbExemple, 'id'>): userDbExemple {
  //db query here
  const userPersisted = {
    id: '1', // uuid
    name: userDbExemple.name,
    age: userDbExemple.age
  }

  return userPersisted;
}

const newUser_ = PersistUser({
  name: 'Vitor',
  age: 23,
});

console.log(newUser_);