import React from 'react'
import { TextField } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    search:{
        margin: `20px`,
        width: `96.5%`,
    },
});


function SearchComp() {
    const classes = useStyles();
    return (
        <div className={classes.search}>
        <TextField className={classes.search}
            id="input-with-icon-textfield"
            placeholder="  Search"
            variant="outlined"
            InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                <SearchIcon  style={{color: grey[500]}}/>
                </InputAdornment>
            ),
            }}
        />
        </div>
    );
}

export default SearchComp
