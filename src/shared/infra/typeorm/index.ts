import { createConnection } from 'typeorm';
import seeds from './seeds'

const dbStart = async () => {
    const result = await createConnection()
    seeds(result.isConnected)
}

dbStart()