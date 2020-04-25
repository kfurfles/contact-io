import React, {useEffect, useState} from 'react'
import Button from '../Button'
import Input from '../Input'

import './style.scss'

const initialState = Object.freeze({
    name: {
        selected: false,
        direction: 'down'
    },
    country: {
        selected: false,
        direction: 'down'
    },
    company: {
        selected: false,
        direction: 'down'
    },
    department: {
        selected: false,
        direction: 'down'
    },
    admissionDate: {
        selected: false,
        direction: 'down'
    }
})

const FilterBar = () => {

    const [
        filterState, setFilterState
    ] = useState(initialState)

    useEffect(() =>{
        setActiveFilter(initialState.name, 'name')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {
        name,
        admissionDate,
        company,
        country,
        department
    } = filterState

    function setActiveFilter(filterValue, filterKey) {

        const { selected, direction } = filterState[filterKey]
        let newFilterKeyValue = {}

        if(selected){
            const newDirection = direction === 'up' ? 'down' : 'up'
            newFilterKeyValue = {
                direction: newDirection,
                selected: true,
            }
        } else {
            newFilterKeyValue = {
                direction: true,
                selected: true,
            }
        }

        setFilterState({
            ...initialState,
            [filterKey]: {
                ...newFilterKeyValue
            }
        })
    }

    return (
        <section className="filters">
        <div className="filters__search">
            <Input className="filters__search__input" type="text"  placeholder="Pesquisar" />

            <button className="filters__search__icon">
                <i className="fa fa-search"/>
            </button>
        </div>

        <Button {...name} onClick={() => setActiveFilter(name,'name')}>Nome</Button>

        <Button {...country} onClick={() => setActiveFilter(name,'country')}>País</Button>
        <Button {...company} onClick={() => setActiveFilter(name,'company')}>Empresa</Button>
        <Button {...department} onClick={() => setActiveFilter(name,'department')}>Departamento</Button>
        <Button {...admissionDate} onClick={() => setActiveFilter(name,'admissionDate')}>Data de admissão</Button>
      </section>
    )
}

export default FilterBar