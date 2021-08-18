import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';

const useStyles = makeStyles({
    root: {
        minWidth: 175,
        marginRight: 15
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const Task = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Titulo de la tarea
                </Typography>
                <Chip
                    icon={<BugReportRoundedIcon />}
                    classes={classes.chip}
                    label="Bug"
                    variant="outlined"
                />
                <Typography variant="body2" component="p">
                    Description
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Empezar</Button>
                <Button size="small" color="secondary">Pausar</Button>
            </CardActions>
        </Card>
    )
}