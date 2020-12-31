import data from '../assets/data/users.json'
import {IUser} from '../interfaces/IUser'

export function getUsers(): Promise<IUser[]>{
    return new Promise(res => {
        setTimeout(() =>{
            res(data)
        },1000)
    })
}