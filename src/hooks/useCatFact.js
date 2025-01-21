import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact)) //    Al ser una getRandomFact función asíncrona,, necesitamos el .then para
  //                                                         especificar que haremos cuando se resuelva la promesa. En esta caso cuando
  //                                                         resuelva utilizaremos el fact que devuevle y se lo pasaremos a setFact
  }

  useEffect(() => { //                                       Efecto para recuperar un fact. Le pasamos directamente la función.
    refreshFact()
  }, [])
  /*                                                         Sin corchetes: se ejecuta el efecto cada vez que se renderiza el componente
                                                             Corchetes vacíos: hacen que este efecto solo se ejecute la primera vez que se renderiza el componente
                                                             Corchetes con variable: La primera vez que se renderice y cada vez que la variable altere su valor
  */
  return { fact, refreshFact }
}
