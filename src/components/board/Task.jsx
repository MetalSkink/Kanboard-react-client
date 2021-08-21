import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
    root: {
        // minWidth: 100,
        maxWidth: '75%',
        border: 'black 1px solid;',
        marginBottom: 15
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    finished: {
        backgroundColor: '#dc3545'
    },
    canceled: {
        backgroundColor: '#0d6efd'
    },
    progress: {
        backgroundColor: '#dc3545'
    },
});

export const Task = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h5" className={classes.pos}>
                    Titulo de la tarea
                </Typography>
                <Chip
                    icon={<BugReportRoundedIcon />}
                    classes={classes.chip}
                    label="Bug"
                    variant="outlined"
                    className={classes.pos}
                />
                <Chip
                    icon={<BuildIcon />}
                    classes={classes.chip}
                    label="Fix"
                    variant="outlined"
                    className={classes.pos}
                />
                <Chip
                    icon={<AssignmentIcon />}
                    classes={classes.chip}
                    label="Normal"
                    variant="outlined"
                    className={classes.pos}
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
