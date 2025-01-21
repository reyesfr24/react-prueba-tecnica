import { useWordFact } from '../hooks/useWordFact'

export function Otro () {
  const { word, url } = useWordFact({ fact: 'Repe' })

  return (
    <>
      {url && <img
        src={url}
        alt={`Imagen de animal con la palabra ${word}`}
              />}
    </>
  )
}
