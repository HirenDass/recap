
//   export const logIn = ({ password, email }) => fetch('/api/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify({ password, email })
//   })
//
const API = 'https://rickandmortyapi.com/api/character';

//https://rickandmortyapi.com/api/character/?status=alive
const data = {status:'dead', gender:'female'};

export const getCharacters = () => fetch(`${API}?status=${encodeURIComponent(data.status)}&gender=${encodeURIComponent(data.gender)}`)
export const getCharacter = (id) => fetch(`${API}/${id}`)