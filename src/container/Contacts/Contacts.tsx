import React, {Fragment, useCallback, useEffect, useState} from 'react'

// import './style.scss'
import { Container, Contacts as ContactsSection, ContactsHeader } from './styled'
import FilterBar from '../../components/FilterBar'
import Contact from '../../components/Contact'
import { getUsers } from "../../services/api";
import { IUser } from '../../interfaces/IUser'

const Contacts = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [filterFn, setFilterFn] = useState<() => (user: IUser) => boolean>(() => () => true)

    const fetchUsers = () => getUsers()

    const filterUsers = useCallback(({ value, key }: { value: string, key: keyof IUser }) =>{

        const filteredFn = !value
            ? () => () => true
            : () => (user: IUser) => user['name'].toString().toLowerCase().includes(value.toString().toLowerCase())

        setFilterFn(filteredFn)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterFn])

    const sortUsers = useCallback(({ direction, key }: { direction: 'up' | 'down', key: keyof IUser }) =>{
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
            <Container>
                <FilterBar
                    onChangeSort={sortUsers}
                    onChangeFilter={filterUsers}/>
            </Container>

            <Container>
                <ContactsSection>
                    <ContactsHeader>
                        <span className="avatar" />
                        <span className="data">Nome</span>
                        <span className="data">Telefone</span>
                        <span className="data">País</span>
                        <span className="data">Admissão</span>
                        <span className="data">Empresa</span>
                        <span className="data">Departamento</span>
                    </ContactsHeader>

                    {users
                        .filter(filterFn)
                        .map(user => <Contact user={user} key={user.id}/> )}

                </ContactsSection>
            </Container>
        </Fragment>
    )
}

export default Contacts