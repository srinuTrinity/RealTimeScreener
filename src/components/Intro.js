import React from 'react'
import styled from 'styled-components'
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
import {grey, indigo } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

function createData(val,name1, value1, name2, value2, name3, value3) {
  return {val, name1, value1, name2, value2, name3, value3 };
}

const rows = [
  createData(1,'Market Cap', 1388374, 'Current Price', 2093, 'High/Low', 2369+'/'+1786),
  createData(2,'Stock P/E', 31.4, 'Book Value', 1042 , 'Dividend Yield', 0.33+'%'),
  createData(3,'ROCE', 8.19+'%', 'ROE', 7.97+'%', 'Face Value', 10.0),
];

const Box = styled.div`
    border-radius: 20px; 
    margin: 30px 40px 10px 50px;
    background-color: white;
    padding: 20px;
`;
const Head = styled.div`
    font-size: 3em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const Button = styled.div`
    display: flex;
    float: right;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    align-items: center;
`;
const Subtiles = styled.span`
    margin-right: 30px;
    color: ${props =>props.icolor};
`;
const Heading = styled.div`
    font-size: 1.2em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
`;
const Info = styled.div`   
`;
const Info2 = styled.div`
    margin: 20px;
`;
const Input = styled.input`
    font-size: 1em;
    padding: 10px;
    border-radius: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    width: 60%;
`;
const Cont = styled.div` 
  display: flex ;
  flex-direction: row;
  margin-top: 20px;
`;
const Card = styled.div`
    display: grid;
    padding: 20px;
    border: ${props => props.iborder};
    width: ${props => props.iwidth};
    border-radius: 10px;
`;


function Intro() {
  return (
    <Box>
      <Button><AddOutlinedIcon/>FOLLOW</Button>
      <Button><GetAppOutlinedIcon/>EXPORT TO EXCEL</Button>
      <Head>Reliance Industries Ltd</Head>
      <Subtiles icolor="blue"><LinkIcon/>ril.com</Subtiles>
      <LaunchIcon style={{ color: indigo[400] }}/><Subtiles icolor="grey">BSE: 500325</Subtiles>
      <LaunchIcon style={{ color: indigo[400] }}/><Subtiles icolor="grey">NSE: Reliance</Subtiles>
      
      <Cont>
      <Card iborder="1px solid grey" iwidth="70%">
        <TableContainer>
            <Table aria-label="simple table">
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.val} style={{backgroundColor: grey[200]}}>
                    <TableCell component="th" scope="row">{row.name1}</TableCell>
                    <TableCell align="right">{row.value1}</TableCell>
                    <TableCell component="th" scope="row">{row.name2}</TableCell>
                    <TableCell align="right">{row.value2}</TableCell>
                    <TableCell component="th" scope="row">{row.name3}</TableCell>
                    <TableCell align="right">{row.value3}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Info2>Add ratio to table</Info2>
        <Input type= "search"  placeholder="eg. Promoter Holding"/>
      </Card>

      <Card iwidth="30%">
          <Heading>ABOUT</Heading>
          <Info>Reliance Industries Limited is a Fortune 500 company and the largest private sector corporation in india</Info>
          <br/>
          <Heading>KEY POINTS</Heading>
          <Info>Reliance Industries Limited is a Fortune 500 company and the largest private sector corporation in india</Info>
      </Card>
      </Cont>
    </Box>
  )
}

export default Intro
