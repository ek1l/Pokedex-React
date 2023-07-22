import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Typography, Container, Paper, Box, Divider, Chip } from '@mui/material';
import PokemonTable from '../components/PokemonTable';
import { useNavigate } from 'react-router-dom';

export const Profile = ({pokemonData}) => {
    const {name, sprites, moves} = pokemonData || {};
    const navigate = useNavigate()

    useEffect(() => {
        if(!pokemonData) {
            navigate("/")
        }
    },[])
    if(!pokemonData) {
        return null
    }
    return (
        <>
        <Navbar hideSearch/>
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display="flex" flexDirection="column"  alignItems="center" p={5}>
                <Typography variant='h4'>{name}</Typography>
                <Box display="flex" alignItems="center" width="100%" marginBottom="15px" sx={{flexDirection:{
                    xs:"column",
                    md: "row",
                }}} >

                
                <img src={sprites.front_default} width="30%" height="100%"/>
                <PokemonTable  pokemonData={pokemonData}/>
                </Box>
                <Box  width="100%">
                <Divider>Variações</Divider>
                <Box display="flex" justifyContent="space-between">
                <img src={sprites.front_shiny} width="30%" height="30%"/>
                <img src={sprites.back_shiny} width="30%" height="30%"/>
                </Box>
                <Divider>Ataques</Divider>
                <Box textAlign="center" marginTop="15px">
                {
                    moves.map((moveData,key) => <Chip key={key} sx={{m:"5px"}} label={moveData.move.name}/>)
                }
                </Box>
                </Box>
                </Box>
                </Paper>
            </Container>
                
        </>

    )
}