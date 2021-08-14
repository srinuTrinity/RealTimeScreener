import React from 'react'
import { TextField } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    search:{
        margin: `20px`,
        width: `100%`,
        display: "flex",
        justifyContent: "center",
    },
    search2:{
        width: `60%`,
    }
});


function SearchComp() {
    const classes = useStyles();
    return (
        <div  className={classes.search}>
        <TextField className={classes.search2}
            id="input-with-icon-textfield"
            fullWidth
            placeholder="Search"
            variant="outlined"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <SearchIcon  fontSize="Large" style={{color: grey[500]}}/>
                </InputAdornment>
            ),
            }}
        />
        </div>
    );
}

export default SearchComp
