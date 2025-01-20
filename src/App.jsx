import { useState, useEffect } from 'react'
const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com' // Prefijo necesario para añadir a la URL que devuelve el endpoint de la API
// const CAT_ENDOPOINT_IMAGE = `https://cataas.com/cat/says/${fact}`

export function App () {
  // Este código se ejecuta cada vez que se renderiza el elemento
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        // const firstWord = fact.split(' ').slice(0, 3).join(' ')
        // Primera forma de sacar tres primeras palabras de un String. Primero con "split" separas la cadena con el separador que le indiques,
        // en este caso un espacio en blanco y te la devuelve en un array. Con "slice" decides cuantas posiciones quieres unir y con 'join' espcificas que unirá
        // las palabras del array
        // const firstWord = fact.split(' ', 3).join(' ')
        //  Segunda forma, primer prámetro de split indicas el separador, con el segundo le indicas la cantidad de elementos a guardar.
        /** Así es la prueba original */
        const word = fact.split(' ')[0]
        // setImageUrl(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
        fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response /* Desestructuración de objetos en JavaScript. Busca una propiedad llamada url dentro del objeto response.
            Crea una variable local llamada url que almacene su valor. */
            // setImageUrl(`https://cataas.com${url}`) // De esta forma está correcto pero metemos en el estado información que no es necesaria
            setImageUrl(url)
          })
      })
  }, [])
  // Sin corchetes: se ejecuta el efecto cada vez que se renderiza el componente
  // Corchetes vacíos: hacen que este efecto solo se ejecute la primera vez que se renderiza el componente
  // Corchetes con variable: La primera vez que cada vez que la variable altere su valor

  useEffect(() => {}, [])
  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>} {/* Si fact tiene un valor "truthy" se renderiza la etiqueta p */}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen de animal con la palabra ${fact}`} />}
    </main>
  )
}
