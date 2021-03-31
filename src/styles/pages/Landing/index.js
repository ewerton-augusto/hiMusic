import styled from 'styled-components';

export const MainContent = styled.section`
    font-family: Geomanist, Arial;
    color: #fff;
    font-size: 2.5rem;
    line-height: .93em;
    text-transform: uppercase;
    font-weight: 800;
    width:100%;
    max-width: 600px;
    //height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1{
        color: var(--secondary-bg-color);
        font-size: 3rem;
        font-weight: 900;
        margin: 2rem 0;
    }

    .landind-button{
        background: var(--secondary-bg-color);
        border: 1px solid var(--primary-bg-color);
        border-radius: 5px;
        padding: 10px;
        margin: 1rem 0;

        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1.25rem;
        outline: 0;
        transition: all .2s ease-in-out;
        cursor: pointer;

        &:hover{
            opacity: .8;
            transform: scale(1.02);
        }

        &:disabled{
            color: #000;
            background: #ccc;
            cursor: no-drop;
            opacity: 1;
            transform: none;
        }
    }

    @media (max-width: 360px){
        align-items: center;
        text-align: center;
        font-size: 1.125rem;

        h1{
            font-size: 2rem;
            font-weight: 800;
        }

        .landind-button{
            margin: 2rem 0;
            width: 100%;
        }
    }
`;
