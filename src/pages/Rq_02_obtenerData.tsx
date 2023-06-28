import { useQuery } from '@tanstack/react-query';

// Llamado a la API
const getRandomNumberAPI = async(): Promise<number> => {
  const res = await fetch ('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();
  return +numberString; // Convierte string a number
}

// Inicio Componente
export const Rq_02_obtenerData = (): any => {
  // isFetching: es el estado actualizado del isloading, cuando se realiza la petición, no cuando esté cargando
  const {data, isLoading, isFetching, isError, error, refetch} = useQuery(['randomNumber'], getRandomNumberAPI);

  console.log(isLoading, isFetching);



  // Inicio Return
  return (
    <div className='container mt-5'>
      {
        isFetching? <p>Loading...</p>
        :
        <p>App {data}</p>
      }

      { //Si no está cargando y tengo un error
        !isFetching && isError && (<h3> {`${error}`} </h3>)
      }

      <button
        onClick={()=> refetch()} // Debe llamarse en una función
        className='btn btn-primary mt-3'
        // disabled={isLoading}
        disabled={isFetching}
      >
        Nuevo Número
      </button>
    </div>
  )
}

