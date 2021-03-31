import styled from 'styled-components';

export const FormSearch = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    padding: 0.5rem 0;
    box-sizing: border-box;
    
    .form-search-input{
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 1px solid #838383;
        border-radius: 5px;
        text-align: center;
        box-sizing: border-box;
        &:focus {
            outline: 0;
            box-shadow: 0 0 2px 2px var(--secondary-bg-color);
        }
    }
`;

export const Label = styled.label`
    color: #fff;
    font-weight: 700;
    margin: 5px 0;
`;

export const SectionForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SectionSearch = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-wrap: wrap;

    @media (max-width: 640px){
        justify-content: center;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    height: 350px;
    background-color: #ffffff99;
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;

    .serarch-img-album{
        padding: 5px;
        width: 100%;
        max-width: 150px;
        max-height: 150px;
        border-radius: 50%;
        box-shadow: 0 1px 10px 5px var(--primary-bg-color);
    }

    h1{
        font-weight: 800;
        margin: 10px;
    }
    p{
        font-weight: 600;
        margin: 10px;
    }

    .serarch-img-icon{
        max-width: 20px;
        vertical-align: text-bottom;
    }

    .serarch-img-icon-link{
        max-width: 30px;
        padding: 1rem;
        transition: all .2s ease-in-out;
        cursor: pointer;

        &:hover{
            opacity: .8;
            transform: scale(1.1);
        }
    }
`;
