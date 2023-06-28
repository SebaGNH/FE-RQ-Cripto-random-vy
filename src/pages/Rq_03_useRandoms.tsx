import { useQueryGetRandoms } from '../hooks/useRandoms';


// Inicio Componente
export const Rq_03_useRandoms = (): any => {

  const { data, isFetching, isError, error, refetch } = useQueryGetRandoms();




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

