import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const useStyles = makeStyles({
    about:{
      backgroundColor: "#B7E9FF",
    }
  });

  const classes = useStyles();


  return (
    <Paper 
    className={classes.about}>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
      </Grid>
        <Grid>
          <Typography 
          sx={{
            mx: 2
          }}variant="h6">
              My Family was inspired by my fiancé Lien Tran.
              She is the organizer in our family and whenever I ask
              anything that related to important documents, she would go through 
              her folders to get it.  I want to make something that make it easier
              for her and this app came to mind.</Typography>
          <Typography 
          sx={{mx: 2, my: 2}}variant="h5" > Technologies Used:</Typography>
          <Typography sx={{mx: 2, my: 1.75}}variant="h6" fontWeight="light">
              React, Redux-Saga, Node.js, Express, Passport, PostgresQL, Material UI</Typography>
      </Grid>
    </Paper>
  );
}

export default AboutPage;
