import { useState, useEffect } from "react"
import { getUsers } from "../services/api"


export function useUserList(){
    const [users, setUsers] = useState([])



    useEffect(() =>{

    },[])

    return [users,setUsers]
} 