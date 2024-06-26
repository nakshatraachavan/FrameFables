import React,{useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container,TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { useDispatch } from 'react-redux';
// import {useHistory} from 'react-router-dom';
// import {GoogleLogin}from 'react-google-login';
import useStyles from './styles';
import Input from './inputs';
// import {signin,signup}from '../../actions/auth';
// import Icon from'./icon';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    // const state= null;
    // return (
    //   <div>
    //     AUTH
    //   </div>
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
 


   const[isSignup,setIsSignup]=useState(false);
  // // const dispatch=useDispatch();
  // // const history=useHistory();
  // const [formData,setFormData]=useState(initialState);
  const handleShowPassword = () => setShowPassword((prevShowPassword)=>!prevShowPassword);

  const handleSubmit=(e)=>{
    // e.preventDefault(); 
    // if(isSignup)
    // {
    //   dispatch(signup(formData,history))
    // }else{
    //   dispatch(signin(formData,history))
    // }
   };

  const handleChange=(e)=>{ 
    // setFormData({...formData, [e.target.name]:e.target.value});
  };


  const switchMode=()=>{
    setIsSignup((prevIsSignup)=>!prevIsSignup);
    handleShowPassword(false);
  };

  // const googleSuccess =  async(res) => {
  //    const result=res?.profileObj;
  //    const token=res?.tokenId;
  //    try{
  //         dispatch({type:'AUTH',data:{result,token}})
  //         history.push('/');
  //    }
  //    catch(error)
  //    {
  //     console.log(error);
  //    }
  // };

  // const googleFailure = (error) => {
  //   console.log("Google Sign In was unsuccessful. Try again later");
  //   console.log(error); // Log the entire error object for more information
  // };
  

return(
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          {/* <GoogleLogin
            clientId='1070737178583-qsjel5f5gpgkbvp59852ugfe8gckegqm.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
            </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
          
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup?'Already have and account? Sign In': 'Do not have an account? Sign Up' }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Auth;
