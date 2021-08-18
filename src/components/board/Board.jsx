import { Grid } from '@material-ui/core'
import { Container } from '@material-ui/core'
import React from 'react'
import { Task } from './Task'

export const Board = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <h1>To do</h1>
                    <Task/>
                </Grid>
                <Grid item xs={3}>
                    <h1>Doing</h1>
                    <Task/>
                </Grid>
                <Grid item xs={3}>
                    <h1>In revision</h1>
                    <Task/>
                </Grid>
                <Grid item xs={3}>
                    <h1>Finished</h1>
                    <Task/>
                </Grid>
            </Grid>
        </Container>
    )
}
