/* Al colocar en un archivo separado esta función, separamos la lógica y nos permitiría utilizar esta función
otros proyectos aun no siendo React, incluso en Vue y otras tecnologías */

const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// export const getRandomFact = () => {
//   return fetch(CAT_ENDOPOINT_RANDOM_FACT)
//     .then(res => res.json())
//     .then(data => {
//       const { fact } = data
//       return fact
//     })
// }
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDOPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
