import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';


import {getPosts} from './actions/posts';
import {useDispatch} from 'react-redux';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App =()=>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);
    return(
       <Container maxidth="lg">
           <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="50"/>
           </AppBar>
           <Grow in>
               <Container>
                   <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid items xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId}/>
                       </Grid>
                       <Grid items xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId= {setCurrentId}/>
                       </Grid>
                   </Grid>
               </Container>
           </Grow>
       </Container>
    );
}

export default App;
