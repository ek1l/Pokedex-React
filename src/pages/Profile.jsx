import React from 'react';
import Navbar from '../components/Navbar';
import { Typography, Container, Paper, Box } from '@mui/material';
import PokemonTable from '../components/PokemonTable';

export const Profile = ({pokemonData}) => {
    const {name, sprites} = pokemonData;
    console.log(pokemonData)
    return (
        <>
        <Navbar hideSearch/>
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display="flex" flexDirection="column"  alignItems="center" p={5}>
                <Typography variant='h4'>{name}</Typography>
                <Box display="flex" m={5}>

                
                <img src={sprites.front_default} width="70%"/>
                <PokemonTable />
                </Box>
                </Box>
                </Paper>
            </Container>
                
        </>

    )
}