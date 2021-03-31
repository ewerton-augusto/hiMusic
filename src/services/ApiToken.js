import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Credentials } from './Credentials';

const ApiToken = () => {

    const spotifyAuth = Credentials();
    const [token, setToken] = useState('');

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(spotifyAuth.ClientId + ':' + spotifyAuth.ClientSecret) 
            },
            data: 'grant_type=client_credentials',
            method: 'POST'

        }).then(tokenResponse => {
            setToken(tokenResponse.data.access_token);
            localStorage.setItem('@token_user', tokenResponse.data.access_token);
        }).catch(error => {
            toast.error('Falha ao autenticar API Spotify.');
        });
    }, []);
    
    return(
        <>
        </>
    )
}

export default ApiToken;