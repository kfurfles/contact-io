import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    @media screen and (min-width: 960px) {
        width: 960px;
    }
`

export const Contacts = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;

    @media screen and (min-width: 728px) {
        padding: 16px 0;
    }
`

export const ContactsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-size: 1.2rem;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 5px;

    &:first-of-type {
        margin-bottom: 5px;
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0 5px 0 50px;
        font-weight: bold;

        & .avatar {
            height: 0;
            border: none;
        }

        .data:nth-of-type(2) {
            color: #000;
        }
    }

    .data{
        width: calc(100% / 6);
        padding: 0 10px;
    }
`
