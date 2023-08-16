import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function HomePage() {
    return (
        <Grid 
        container 
        spacing={2}
        alignContent='center'
        sx={{background: 'black', height: '100vh'}}>
            <Grid item xs={6}>
                <Typography variant='h1' color='white'>Hi I'm Miks!</Typography>
            </Grid>
            <Grid item xs={6} color='white'>
                an epic 3d art here
            </Grid>
        </Grid>
    )
}