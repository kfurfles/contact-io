import React, {useCallback, useEffect, useState} from 'react'
import Button from '../Button'
import Input from '../Input'

import './style.scss'

const initialState = {
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
}

const FilterBar = ({ onChangeFilter, onChangeSort }) => {

    const [ filterState, setFilterState ] = useState(initialState)
    const [filter, setFilter] = useState({})
    const [search, setSearch] = useState('');

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
                direction: 'up',
                selected: true,
            }
        }

        setFilterState({
            ...initialState,
            [filterKey]: {
                ...newFilterKeyValue
            }
        })
        setFilter({ ...newFilterKeyValue, key: filterKey})
        setSearch('')
        onChangeSort({ key: filterKey, direction: newFilterKeyValue.direction })
    }

    const setSearchFilter = useCallback(e =>{
        const value = e.target.value
        setSearch(value)
        onChangeFilter({ value, ...filter })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filter])

    useEffect(() =>{
        setActiveFilter(initialState.name, 'name')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <section className="filters">
        <div className="filters__search">
            <Input
                value={search}
                onChange={setSearchFilter}
                className="filters__search__input"
                type="text"  placeholder="Pesquisar" />

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