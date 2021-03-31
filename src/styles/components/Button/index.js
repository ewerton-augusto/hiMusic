import styled from 'styled-components';

export const Button = styled.button`
    background: var(--secondary-bg-color);
    border: 1px solid var(--primary-bg-color);
    border-radius: 5px;
    padding: 10px;
    margin: 1rem 0;

    color: #fff;
    text-transform: uppercase;
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
`;