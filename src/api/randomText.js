import { apiGet } from  '../utils'

export function GenerateRandomTextAPI(){
    return apiGet('/api')
}