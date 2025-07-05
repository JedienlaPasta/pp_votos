import { connectToDB } from './db-connection';

export async function getVotes() {
  try {
    const pool = await connectToDB();
    if (!pool) {
      console.warn('No se pudo establecer una conexión a la base de datos.');
      return { votes: 0 };
    }
    console.log('Buscando...');
    const request = pool.request();
    const result = await request.query(
      'SELECT COUNT(*) as votos from votantes'
    );
    console.log(result.recordset[0]);
    return result.recordset[0].votos;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return { votes: 0 };
  }
}
