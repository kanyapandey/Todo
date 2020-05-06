import React from 'react';
import { Grid, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { setUserData } from '../../redux/login.action';
import { connect } from 'react-redux';

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

function LoginForm(props) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
      history.push("/signup")
    }
    return(
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container>
                <Grid item xs sm={12} md={12}>
                    <Button
                    size="large"
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={classes.submit1}
                    onClick={handleClick}
                  >
                    Login
                  </Button>
                  <Button
                    size="large"
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={classes.submit}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
        
    )
}

function mapStateToProps(state) {
  console.log(`store from loginform: ${JSON.stringify(state)}`);
  return {
    currUser: state.loginCurrentUser.currUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch(setUserData(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)