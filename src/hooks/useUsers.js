import { useState, useEffect } from "react"
import { getUsers } from "../services/api"


export function useUserList(){
    const [users, setUsers] = useState([])
    useEffect(() =>{
        async function fetchUsers(){
        const userList = await getUsers()
        setUsers(userList)
        }
        fetchUsers()
    },[])

    return users
} 