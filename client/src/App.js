// import React, {useState, useEffect} from 'react';
// import {Container, Grow, Grid} from '@material-ui/core';


// import {getPosts} from './actions/posts';
// import {useDispatch} from 'react-redux';

// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
// import useStyles from './styles';
// import Navbar from './components/Navbar/Navbar';
// const App =()=>{
//     const [currentId, setCurrentId] = useState(null);
//     const classes = useStyles();
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(getPosts());
//     },[currentId, dispatch]);
//     return(
//        <Container maxidth="lg">
//            <Navbar/>

//            <Grow in>
//                <Container>
//                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
//                        <Grid items xs={12} sm={7}>
//                             <Posts setCurrentId= {setCurrentId}/>
//                        </Grid>
//                        <Grid items xs={12} sm={4}>
//                             <Form currentId={currentId} setCurrentId= {setCurrentId}/>
//                        </Grid>
//                    </Grid>
//                </Container>
//            </Grow>
//        </Container>
//     );
// }

// export default App;


import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;