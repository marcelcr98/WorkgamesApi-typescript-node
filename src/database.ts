import mysql, { createPool } from 'promise-mysql';
import keys from './keys';
//crear la conexion en produccion
const pool = mysql.createPool(keys.database);


pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected')
    });

export default pool;