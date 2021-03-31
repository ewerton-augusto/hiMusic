import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import db from '../../services/database.json';
import api from '../../services/api';

import DropdownList from '../../components/DropdownList';
import { Button } from '../../styles/components/Button';
import Loadind from '../../components/Loading';
import Header from '../../components/Header';

import SpotifyIcon from '../../assets/svg/spotify.svg';
import FollowersIcon from '../../assets/svg/followers.svg';
import StarIcon from '../../assets/svg/star.svg';
import DateIcon from '../../assets/svg/date.svg';
import TrackIcon from '../../assets/svg/track.svg';

import { SectionForm, Label, FormSearch, SectionSearch, Card } from '../../styles/pages/Search';

const Search = () => {
    const [q, setQ] = useState('');
    const [type, setType] = useState('');
    const [limit, setLimit] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [dados, setDados] = useState([]);
    const [aba, setAba] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoad(true);

        const resultSearch = await api.get(`search?q=${q}&type=${type}&limit=${limit}`);

        if (type === "artist") {
            setDados(resultSearch.data.artists.items);
        }

        if (type === "album") {
            setDados(resultSearch.data.albums.items);
        }

        if (type === "track") {
            setDados(resultSearch.data.tracks.items);
        }

        if (resultSearch.status === 200) {
            setAba(type);
            setIsLoad(false);
            toast.success('Pesquisado com sucesso!');
        } else {
            console.log('error: API');
            toast.warning('Falha ao consultar Spotify.');
        }
    }

    return (
        <>
            <Header />
            <SectionForm
                as={motion.section}
                transition={{ delay: 0.5, duration: 1 }}
                variants={{
                    show: { opacity: 1, y: '0' },
                    hidden: { opacity: 0, y: '100%' },
                }}
                initial="hidden"
                animate="show"
            >
                <FormSearch onSubmit={handleSubmit}>
                    <Label> Pesquisar por:</Label>
                    <input
                        className="form-search-input"
                        type="text"
                        onChange={(event) => setQ(event.target.value)} />

                    <Label>Tipo:</Label>
                    <DropdownList
                        options={db.filtros}
                        onChange={(event) => setType(event.target.value)} />

                    <Label>Limite:</Label>
                    <DropdownList
                        options={db.limites}
                        onChange={(event) => setLimit(event.target.value)} />

                    <Button
                        type="submit"
                        disabled={
                            q && type && limit ? false : true
                        }> Pesquisar </Button>
                </FormSearch>
            </SectionForm>
            {aba === "artist" ? (<>
                <SectionSearch>
                    {isLoad ? <Loadind /> : dados.map((artist) => (
                        <Card
                            key={artist.id}
                            as={motion.div}
                            animate={{ y: 15 }}
                            transition={{ duration: 2 }}
                        >
                            <div>
                                {artist.images[0] ? (<>
                                    <img
                                        className="serarch-img-album"
                                        src={artist.images[0].url}
                                        alt={artist.name} />
                                </>) : <></>}
                            </div>
                            <div>
                                <h1>{artist.name}</h1>
                                <p> <img className="serarch-img-icon" src={FollowersIcon} /> {artist.followers.total}</p>
                                <p> <img className="serarch-img-icon" src={StarIcon} /> {artist.popularity}</p>
                            </div>
                            <div>
                                <a href={artist.uri}>
                                    <img src={SpotifyIcon} className="serarch-img-icon-link" alt="Spotify" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </SectionSearch>
            </>) : (<></>)}
            {aba === "album" ? (<>
                <SectionSearch>
                    {isLoad ? <Loadind /> : dados.map((album) => (
                        <Card
                            key={album.id}
                            as={motion.div}
                            animate={{ y: 15 }}
                            transition={{ duration: 2 }}
                        >
                            <div>
                                {album.images[0] ? (<>
                                    <img className="serarch-img-album"
                                        src={album.images[0].url}
                                        alt={album.name}
                                        />
                                </>) : <></>}
                            </div>
                            <div>
                                <h1>{album.name}</h1>
                                <p> <img className="serarch-img-icon" src={DateIcon} /> {album.release_date}</p>
                                <p> <img className="serarch-img-icon" src={TrackIcon} /> {album.total_tracks}</p>
                            </div>
                            <div>
                                <a href={album.uri}>
                                    <img src={SpotifyIcon} className="serarch-img-icon-link" alt="Spotify" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </SectionSearch>
            </>) : (<></>)}
            {aba === "track" ? (<>
                <SectionSearch>
                    {isLoad ? <Loadind /> : dados.map(track => (
                        <Card
                            key={track.id}
                            as={motion.div}
                            animate={{ y: 15 }}
                            transition={{ duration: 2 }}
                        >
                            <div>
                                {track.album.images[0] ? (<>
                                    <img className="serarch-img-album"
                                        src={track.album.images[0].url}
                                        alt={track.name} />
                                </>) : <></>}
                            </div>
                            <div>
                                <h1>{track.name}</h1>
                                <p> <img className="serarch-img-icon" src={StarIcon} /> {track.popularity}</p>
                            </div>
                            <div>
                                <a href={track.uri}>
                                    <img src={SpotifyIcon} className="serarch-img-icon-link" alt="Spotify" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </SectionSearch>
            </>) : (<></>)}
        </>
    );
}

export default Search;
