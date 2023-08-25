import {useState} from "react"
import image from "./ISE_logo.png";
import { makeStyles } from '@material-ui/core';
import {Grid,Button,TextField} from "@mui/material";
import '../Login/Login.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "gray",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
border:'1px solid white',
borderRadius:'7px',
borderTop:'5px solid #337ab7',
boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add your desired shadow styles here
width:'50%',
paddingBottom:'30px',
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
backgroundColor:'white',

},

imge:{
  textAlign:'center',
padding:'15px'

}, 
input:{
  width: '100%',
  font:'16px',
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px", // Set your desired border radius value
    },
    "& input": {
      fontSize: "14px", // Adjust the font size as needed
    },
  },


  // border:'1px solid gray',
  
},

inputfiled:{
  padding:'20px',
},
gap:{
  marginBottom: '12px',
  boxSizing: 'border-box',
}, 
 button: {
  backgroundColor:'#337ab7',
  width:'100%',
  height:'6vh',
  borderRadius:"8px",
  color: theme.palette.common.white,
  // Set a width for the buttons (inline for large screens)
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor:theme.palette.primary.light, // Change color on hover

  },
  paddingBottom:'17px'

},
text:{
  display:'flex',
width:'100%',
marginTop:'10px',
paddingTop:'10px',
color:'gray'
}
 

}));
const Login = () => {
  const classes = useStyles();
  const [state,setState]=useState({username:"",password:""})
  
  const [err,setErr]=useState({username:'',password:''})
  const  handleChange=(e:React.ChangeEvent <HTMLInputElement> )=>{
    const {name,value}=e.target;
setState((pre)=>({...pre,[name]:value}))
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log("login",state)
    if(state.username.trim()===""){
      setErr({...err, username:'Enter username'})
    }else{
      setErr({
      ...err,username:''  
      }) 
    }
    if(state.password.trim()===""){
      setErr((err)=>({
        ...err,password:'enter password'
      }))
    // }else if(state.password.trim().length<8){
    //   setErr((err)=>({...err,password:"password is minimum 8 characters"}))
    // }
    
    }else{
      setErr({...err,password:""})
    }
  }
  const handleReset=()=>{
    setState({
      username:'',
      password:''
    })
    console.log("Reset",state)
  }
  return (
     <div className={classes.root}>
         <div className={classes.box}>
    <form onSubmit={handleSubmit}>
        <div className="container">
            <div className={classes.imge}>
          <img src={image} alt="hi"/>
            </div>
            <hr className="hr"/>
      <div className={classes.inputfiled}>
      <div  className={classes.gap}>
          <TextField type="text" 
          required
          fullWidth
          placeholder='Username'
          className={classes.input} 
          name="username"
          value={state.username}
          onChange={handleChange}
          >
          </TextField>
          {err.username && <span style={{color:'red'}}>{err.username}</span>}
            </div>
            <div   className={classes.gap} >
          <TextField 
          onChange={handleChange}
          required
          type='password'
          fullWidth
          placeholder="Password" 
          className={classes.input}
          name="password"
          value={state.password }
          />
          {err.password && <span  style={{color:'red'}}>{err.password}</span>}
            </div>
        
            <div>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Button className={classes.button} variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button className={classes.button} variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Grid>
    </Grid>
  </div>
     <Grid className={classes.text}>
      <Grid xl={12} >
   ISE Labs, Inc. - An ASE Test company | Copyright 2004 C ISE Labs, Inc. All Right Reserved
      </Grid>
     </Grid>
      </div>
        </div>
    </form>
    </div>
   </div>
  )
}

export default Login;