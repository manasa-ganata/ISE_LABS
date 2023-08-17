import React ,{useState}from "react";
import { AppBar, Toolbar, Typography, IconButton ,Menu, MenuItem} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import useStyles from "./Navbarstyles";
  const Navbar: React.FC = () => {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false); 
    const handleClick = () => {
      setClicked(!clicked); 
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };
    return (
      <>      <AppBar position="fixed" >
        <Toolbar className={classes.appBar}>
       
          <div className={classes.title} >
          <img src="http://183.82.108.168:2727/assets/images/logoonly_ISE.png"/> 
          
           <Typography  variant="h6" style={{marginTop:'15px',marginLeft:'10px',}}> Customer Portal</Typography>
            </div>

            <div className="menu-icons" onClick={handleClick}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
              </div>


            <div className={classes.icon}>
            <IconButton onClick={handleIconClick} className={classes.profileButton}>
              <AccountCircleOutlinedIcon />
              <Typography variant="body1"> MArvell M </Typography>
              </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <div >
            <MenuItem onClick={handleLogout}> <PowerSettingsNewIcon />  Logout</MenuItem>
            </div>
          </Menu>
        </div>
        </Toolbar>
      </AppBar>
      </>

    );
  };
  
  export default Navbar;