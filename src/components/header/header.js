import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import  './header.css'

function Header() {

  return (
    <div className="root">
      <AppBar  color = "white" position="static" className="root">
        <Toolbar>
          <Typography variant="h3" className="head title  ">
            screener
          </Typography>
          <Typography variant="h7" className="title">
            HOME
          </Typography>
          <Typography variant="h7" className="title">
            SCREENS
          </Typography>
          <Typography variant="h7" className="title">
            TOOLS
          </Typography>
          <div className="searchbox"><SearchIcon className="icon"/><input type= "search"  placeholder="Search for a company" className = "search"/></div>
          <Button variant="outlined" color="primary" className = "btn"><PersonIcon/>Login</Button>
          <Button variant="outlined" color="primary" className = "btn">Get Free Account</Button>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header




