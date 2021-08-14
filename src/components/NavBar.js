import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BuildIcon from '@material-ui/icons/Build';
import { Button } from '@material-ui/core';
import HomePage from './HomePage';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      margin: "0",
      backgroundColor: theme.palette.background.paper,
    },
    navbar: {
        display: "flex",
        flexDirection: "row",
    },
    tab: {
        flexGrow: 1,
        marginLeft: "5%",
    },
    button: {
        margin: "15px",
        width: "15%",
        textDecoration: "none",
    }
  }));

function NavBar() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.navbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tab}
        >
          <Tab label="Screen" icon={<BuildIcon />} />
          <Tab label="Tools" icon={<BuildIcon />} />
          <Tab label="About" icon={<BuildIcon />} />
          <Tab label="Support" icon={<BuildIcon />} />
        </Tabs>
        <>
        <Button variant="outlined" color="primary" className={classes.button}>Login</Button>
        <Button variant="outlined" color="primary" className={classes.button}>Get Account</Button></>
      </AppBar>
      <TabPanel value={value} index={0}><HomePage/></TabPanel>
      <TabPanel value={value} index={1}>y</TabPanel>
      <TabPanel value={value} index={2}>z</TabPanel>
      <TabPanel value={value} index={3}>s</TabPanel>
    </div>
  )
}

export default NavBar

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <div role="tabpanel" >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
