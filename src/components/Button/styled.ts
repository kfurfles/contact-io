import styled from '@emotion/styled'
import { IButton } from './IButton'

export const Button = styled.button<IButton>`
    align-items: center;
    background-color: ${props => props.selected ? '#4C84FF' : '#fff' };
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .07);
    color: ${props => props.selected ? '#fff' : '#9FA9BC' };
    display: flex;
    flex-wrap: nowrap;
    font-size: 1.3rem;
    font-weight: normal;
    justify-content: center;
    margin: 0 8px;
    padding: 10px;
    white-space: nowrap;

    i {
        color: ${props => props.selected ? '#fff' : '#9FA9BC' };
        margin-top: ${props => props.direction === 'up' ? '5px' : '-5px' };
        margin-left: 8px;
    }
`