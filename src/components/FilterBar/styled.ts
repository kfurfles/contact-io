import styled from '@emotion/styled'
import Input from '../Input'

export const ButtonBase = styled.button`
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
`

export const Container = styled.section`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    padding: 24px 0;
`

export const SearchBox = styled.div`
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .07);
    display: flex;
    flex-wrap: nowrap;
    height: 40px;
    justify-content: stretch;
    margin-right: 8px;
    overflow: hidden;
    width: 100%;
`

export const ButtonFilter = styled(ButtonBase)`
    background: transparent;
    font-size: 1.4rem;
    color: #9FA9BC;

    &:hover{
        color: #4C84FF;
    }
`

export const InputFilter = styled(Input)`
    background: transparent;
    border: none;
    color: #4C84FF;
    font-size: 1.4rem;
    font-weight: bold;
    outline: none;
    padding: 5px 10px;
    width: 100%;
    
    &::placeholder {
        color: #9FA9BC;
        font-weight: normal;
    }
`
