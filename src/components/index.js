import React from 'react';
import { CssBaseline, Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import todoimage from '../assets/Group16.png';
import LoginForm from '../components/LoginForm/LoginForm';
import SignupForm from '../components/SignupForm/SignupForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CommonGraphic from '../components/CommonGraphic/CommonGraphic';
import { store } from '../redux/login.store';
import { Provider } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    loginImg: {
      marginLeft: '-8%'
    },
    h2Title: {
      position: 'absolute',
      top: '16%',
      marginLeft: '6%',
      color: 'white'
    },
    h3Para: {
      position: 'absolute',
      top: '35%',
      marginLeft: '6%',
      color: 'white',
      lineHeight: '2em'
    },
    image: {
        backgroundImage: 'url(LoginGraphic)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        marginTop: theme.spacing(7),
        marginLeft: '26px',
        width: '35%'
        // margin: theme.spacing(3, 0, 2),
      },
      submit1: {
        marginTop: theme.spacing(7),
        // margin: theme.spacing(5, 0, 0),
        width: '35%'
      },
      copyright: {
        color: 'white',
        textAlign: 'center'
      },
      content: {
        position: 'absolute',
        top: '10%',
        left: '56%',
        color: 'white'
      },
      socialImg: {
        marginTop: '40%',
        textAlign: 'center'
      },
      space: {
        marginLeft: '40px'
      },
      footer: {
        transform: 'translate(30%,-50%)'
      }
}))

export default function Login(props) {
    const classes = useStyles();
    store.subscribe(e => console.log);
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <img src={todoimage} alt="" />
              <Typography component="h1" variant="h5">
                Welcome login to get started
              </Typography>
              <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
              </Switch>
            </div>
          </Grid>
          <CommonGraphic />
          </Grid>
        </BrowserRouter>
      </Provider>
    )
}

