import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/' // Prefijo necesario para añadir a la URL que devuelve el endpoint de la API
//                                                  Custom Hook: debe ser una función nombrada que empiece por "use"
export function useWordFact ({ fact }) { //         El parámetro { fact } es un OBJETO con una propiedad llamada fact.
  const [word, setWord] = useState()

  useEffect(() => { //                              Efecto para buscar la imagen con la palabra
    if (!fact) return //                            Si fact en false hace un return que es cortar la ejecución del código

    /*                                              fact.split(' ').slice(0, 3).join(' ')
                                                    Sacar tres primeras palabras de un String. Primero con "split" separas la cadena con el separador que le indiques,
                                                    en este caso un espacio en blanco y te la devuelve en un array. Con "slice" decides cuantas posiciones quieres unir y con 'join' espcificas que unirá
                                                    las palabras del array
                                                    const threeWord = fact.split(' ', 3).join(' ')
                                                    Segunda forma, primer prámetro de split indicas el separador, con el segundo le indicas la cantidad de elementos a guardar.
    */

    const firstWord = fact.split(' ')[0]
    setWord(firstWord)//                            Código del tutorial abajo
    //                                              fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`) // Forma en la que lo hace en el curso
    //                                              .then(res => res.json())
    //                                              .then(response => {
    //                                              const { url } = response /* Desestructuración de objetos en JavaScript. Busca una propiedad llamada url dentro del objeto response.
    //                                              Crea una variable local llamada url que almacene su valor. */
    //                                              // setImageUrl(`https://cataas.com${url}`) // De esta forma está correcto pero metemos en el estado información que no es necesaria
    //                                              setImageUrl(url)
    //                                              })
  }, [fact])

  return { url: `${CAT_PREFIX_IMAGE_URL}${word}`, word }
}
