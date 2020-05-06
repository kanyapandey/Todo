import React from 'react';
import { Redirect } from 'react-router-dom';
import { setCurrentRoute } from '../../redux/login.action';
import { connect } from 'react-redux';
import { Box, Typography, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginGraphic from '../../assets/LoginGraphic.svg';
import Messenger from "../../assets/Messenger.svg";
import Skype from "../../assets/Skype.svg";
import Discord from "../../assets/Discord.svg";
// import { useHistory } from 'react-router-dom';

function Copyright() {
  const classes = useStyles();
    return (
        <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
            {'Copyright Of Ben Parkinson'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    loginImg: {
      marginLeft: '-8%',
      height: '100%'
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

function CommonGraphic(props) {
    const classes = useStyles();
    // const history = useHistory();

    const handleClick = () => {
      props.setRoute(window.location.pathname);
      return window.location.pathname;
    }

    return(
      <Grid item xs={false} sm={6} md={6}>
      <img src={LoginGraphic} className={classes.loginImg} alt=""/>
      <div className={classes.content}>
        <div>
          <h1>REDUX & TODO</h1>
          <Typography component="h1" variant="h6">
            We made this application to help <br />
            everyone remember all the tasks in <br />
            your busy days. <br /> <br/>
            <p>{props.route === '/signup' ? 'Already a user ? Login here' : 'New user ? Make a profile here'}</p> <br/>
              {props.route === '/signup' ? <Redirect to ='/' /> : <Redirect to ='signup' />}
              <Button
                size="large"
                type="submit"
                variant="contained"
                className={classes.submit1}
                onClick={handleClick}
                value={props.route === '/signup' ? 'Login' : 'Signup'}
              >
                Login
              </Button>
              
          </Typography>
        </div>
        <div className={classes.footer}>
          <div className={classes.socialImg}>
            <img src={Messenger} alt=""/>
            <img src={Discord} className={classes.space} alt=""/>
            <img src={Skype} className={classes.space} alt=""/>
          </div>
          <Box mt={1}>
            <Copyright />
          </Box>
        </div>
      </div>
  </Grid>
    )
}

function mapStateToProps(state) {
  console.log(state);
  return {
    route: state.loginReducer.currRoute
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setRoute: (route) => dispatch(setCurrentRoute(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonGraphic)

