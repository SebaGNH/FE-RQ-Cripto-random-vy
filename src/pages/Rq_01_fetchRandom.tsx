import { useEffect, useReducer, useState } from 'react'

// Llamado a la API
const getRandomNumberAPI = async(): Promise<number> => {
  const res = await fetch ('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();
  // throw new Error('Auxilio');
  return +numberString; // Convierte string a number
}

// Inicio Componente
export const Rq_01_fetchRandom = (): any => {
  //Si no ponemos el tipo de dato puede ser "number o undefined", lo vemos al poner el mouse sobre useState, inicia con undefined
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [stateKey, dispatchForceRefetch] = useReducer((n) => n + 1, 0);

  useEffect(() => {
    getRandomNumberAPI()
    .then(num => setNumber(num))
    .catch(err => setError(err.message));
    setIsLoading(true); //Loading mientras pulso el btn
  }, [stateKey])
  // console.log(getRandomNumberAPI());

  useEffect(() => {
    if (number) setIsLoading(false); // si tenemos un número
  }, [number]);

  useEffect(()=>{
    if (error) setIsLoading(false);
  },[error]); // Cada vez que cambie el error

  // Inicio Return
  return (
    <div className='container mt-5'>
      {
        isLoading? <p>Loading...</p>
        :
        <p>App {number}</p>
      }

      {
        //Si no está cargando y tengo un error
        !isLoading && error && (<h3>{error}</h3>)
      }

      <button
        onClick={dispatchForceRefetch}
        className='btn btn-primary mt-3'
        disabled={isLoading}
      >
        Nuevo Número
      </button>
    </div>
  )
}

