import React from 'react';
import { MainContent } from '../../styles/pages/Landing';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import Header from '../../components/Header';

const Landing = () => {
    return (
        <>
            <Header />
            <MainContent
                as={motion.section}
                transition={{ delay: 0.3, duration: 1 }}
                variants={{
                    show: { opacity: 1, y: '0' },
                    hidden: { opacity: 0, y: '100%' },
                }}
                initial="hidden"
                animate="show"
            >
                <h1>Hi-Music</h1>
                <p>Encontre artistas, álbuns e músicas!</p>
                <Link className="landind-button" to="/search"> Iniciar </Link>
            </MainContent>
        </>
    );
}

export default Landing;