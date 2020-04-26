import React, {Fragment, useCallback, useEffect, useState} from 'react'

import './style.scss'
import FilterBar from '../../components/FilterBar'
import Contact from '../../components/Contact'
import {getUsers} from "../../services/api";

const Contacts = () => {

    const [users, setUsers] = useState([])
    const [filterFn, setFilterFn] = useState(() => () => true)

    async function fetchUsers(){
        return await getUsers()
    }

    const filterUsers = useCallback(({ value, key }) =>{

        const filteredFn = !value
            ? () => () => true
            : () => user => user[key].toString().toLowerCase().includes(value.toString().toLowerCase())

        setFilterFn(filteredFn)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterFn])

    const sortUsers = useCallback(({ direction, key }) =>{
        const sortedUsers = users.sort((a,b) => a[key] > b[key] && direction === 'up' ? 1 : -1)

        setUsers([ ...sortedUsers ])
    },[users])

    useEffect(() => {
        fetchUsers()
            .then(users => {
                setUsers(users)
            })
    },[])

    return (
        <Fragment>
            <div className="container">
                <FilterBar
                    onChangeSort={sortUsers}
                    onChangeFilter={filterUsers}/>
            </div>

            <div className="container">
                <section className="contacts">
                    <article className="contact">
                    <span className="contact__avatar" />
                    <span className="contact__data">Nome</span>
                    <span className="contact__data">Telefone</span>
                    <span className="contact__data">País</span>
                    <span className="contact__data">Admissão</span>
                    <span className="contact__data">Empresa</span>
                    <span className="contact__data">Departamento</span>
                    </article>

                    {users
                        .filter(filterFn)
                        .map(user => <Contact user={user} key={user.id}/> )}

                </section>
            </div>
        </Fragment>
    )
}

export default Contacts