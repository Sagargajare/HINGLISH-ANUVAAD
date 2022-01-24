import React from 'react'
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
    },
}));
export default function Header() {
     const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography color="primary" align="center" variant="h3">
          Team Fledgling
        </Typography>
        <br />
        <Typography align="center" variant="h5">
          HINGLISH ANUVAAD
        </Typography>
      </div>
    );
}
