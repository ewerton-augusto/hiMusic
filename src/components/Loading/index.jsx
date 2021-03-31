import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/loading.json';

const LoadDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loadind = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <LoadDiv>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
        </LoadDiv>
    );
}

export default Loadind;
