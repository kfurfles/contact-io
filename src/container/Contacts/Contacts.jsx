import React, { Fragment} from 'react'

import './style.scss'
import FilterBar from '../../components/FilterBar'
import Contact from '../../components/Contact'
import { useUserList } from '../../hooks/useUsers'

const Contacts = () => {

    const users = useUserList()

    return (
        <Fragment>
            <div className="container">
                <FilterBar />
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

                    {users.map(user => <Contact user={user} key={user.id}/> )}

                </section>
            </div>
        </Fragment>
    )
}

export default Contacts