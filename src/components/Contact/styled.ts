import styled from '@emotion/styled'

export const Contact = styled.article`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .07);
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-size: 1.2rem;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 5px;

    .avatar {
        border-radius: 50px;
        height: 35px;
        overflow: hidden;
        width: 35px;
        border: 2px solid #9FA9BC;
        margin-right: 10px;
    
        & img {
            height: 100%;
        }
    }

    .data {
        width: calc(100% / 6);
        padding: 0 10px;

        &:nth-of-type(2) {
            color: #4C84FF;
        }
    }
`