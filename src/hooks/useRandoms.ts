import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Llamado a la API
const getRandomNumberAPI = async(): Promise<number> => {
  const resultado = await axios.get('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');

  return +resultado; // Convierte string a number
}


export const useQueryGetRandoms = () => {
  const query = useQuery(['randomNumber'], getRandomNumberAPI);

  return query;
}