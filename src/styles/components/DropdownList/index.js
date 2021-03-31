import styled from 'styled-components';

export const SelectItem = styled.select`
    padding: 0.5rem;
    margin: 0.5rem 0;
    box-sizing: border-box;
    border: 1px solid #838383;
    border-radius: 5px;
    text-align: center;
    text-align-last: center;
    &:focus {
        outline: 0;
        box-shadow: 0 0 2px 2px var(--secondary-bg-color);
    }

`;