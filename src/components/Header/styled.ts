import styled from '@emotion/styled';

export const Container = styled.header`
    backface-visibility: hidden;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .07);
    left: 0;
    padding: 10px 16px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;

    .logo-link {
        position: fixed;
        top: 50%;
        left: 50%;
        background: #fff;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        display: flex;

        svg {
            height: 100%;
            width: calc(100% - 100px);

            .st0{
                fill: #2C3341;
                stroke: #2C3341;
                opacity: 0;
            }
            .st1{
                fill: transparent;
                stroke:#4C84FF;
            }

            &.completed{
                .st0{fill:#2C3341;}
	            .st1{fill:#4C84FF;}
            }
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`