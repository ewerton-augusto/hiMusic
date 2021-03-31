import styled from 'styled-components';
import BackgroundImg from '../../assets/background2.jpg';

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #222;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${BackgroundImg});
`;

export const Container = styled.div`
    width:100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem;
`;
