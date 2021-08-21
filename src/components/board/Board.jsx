import { Grid } from '@material-ui/core'
import React from 'react'
import { Task } from './Task'
import useStyles from './styles';

export const Board = () => {

    const classes = useStyles();

    const tasks= [{id:1},{id:2},{id:3},{id:6},{id:5}];

    return (
        <Grid container spacing={2} className={classes.root}  direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item lg={3} md={6} xs={12}>
                <h1>To do</h1>
                {tasks.map((tsk) =>
                        <Task key={tsk.id}/>
                )}
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
                <h1>Doing</h1>
                <Task/>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
                <h1>In revision</h1>
                <Task/>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
                <h1>Finished</h1>
                <Task/>
            </Grid>
        </Grid>
    )
}
