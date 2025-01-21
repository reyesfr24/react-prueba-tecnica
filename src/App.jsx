import './App.css'
import { useWordFact } from './hooks/useWordFact.js'
import { useCatFact } from './hooks/useCatFact.js'
// import { Otro } from './Components/Otro.jsx'
// const CAT_ENDOPOINT_IMAGE = `https://cataas.com/cat/says/${fact}`

export function App () { /*                                  Este código se ejecuta cada vez que se renderiza el elemento */
  const { fact, refreshFact } = useCatFact()
  const { word, url } = useWordFact({ fact })

  const handleClick = () => { //                             Arrow function o función flecha. Es una forma moderna de definir funciones anónimas
    refreshFact()
  }

  return (
    <main>
      <h1>App</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>                                              {/* La etiqueta section es necesaria para alinear en fila los elementos */}
        {fact && <p>{fact}</p>}                              {/* Si fact tiene un valor "truthy" se renderiza la etiqueta p */}
        {url && <img
          src={url}
          alt={`Imagen de animal con la palabra ${word}`}
                />}
        {/*                                                  <img src='https://picsum.photos/200/300' alt='Imagen alternativa si no carga la API se la prueba tecnica' /> */}
        {/* <Otro />
        <Otro />
        <Otro /> */}
      </section>
    </main>
  )
}
