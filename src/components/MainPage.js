import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const useStyles = makeStyles({
head: {
  color: '#878787',
  fontSize:'16px',
  fontFamily:'Lato',
  fontWeight:'500',
  LineHeight:'19px',
  border:0,
},

entry: {
color:'#414141',
fontFamily:'Lato',
fontWeight:'500',
fontSize:'14px',
LineHeight:'17px',
border:'0',
},

data: {
height:'65px',
"&:nth-child(odd)": {
    backgroundColor:'rgba(238, 242, 245, 0.4)',
},
}
});

function createData(owner, EndDate, Profits, Losses, Phone) {
  return { owner, EndDate, Profits, Losses, Phone };
}

const rows = [
  createData('Savannah Nguyen', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function MainPage() {
  const classes = useStyles();
    return (
        <MainPart>
          <Heading>
           <h>Overview</h>
           </Heading>
      <Container>
      <Table>
      <colgroup>
      <col style={{width:'34%'}}/>
        <col style={{width:'22%'}}/>
        <col style={{width:'22%'}}/>
        <col style={{width:'22%'}}/>
        <col style={{width:'22%'}}/>
      </colgroup>
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Owner</TableCell>
            <TableCell className={classes.head}>End date</TableCell>
            <TableCell className={classes.head}>Profits</TableCell>
            <TableCell className={classes.head}>Losses</TableCell>
            <TableCell className={classes.head}>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.data} key={row.name}>
              <TableCell className={classes.entry}component="th" scope="row">
                <UserImg>
                  <img src='https://picsum.photos/40'></img>
                <span>{row.owner}</span>
                </UserImg>
              </TableCell>
              <TableCell className={classes.entry}>{row.EndDate}</TableCell>
              <TableCell className={classes.entry}>{row.Profits}</TableCell>
              <TableCell className={classes.entry}>{row.Losses}</TableCell>
              <TableCell className={classes.entry}>{row.Phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Container>
        </MainPart>    
    )
}

export default MainPage

const MainPart=styled.div `
flex-grow:1;
align-content: center;
h {
    font-weight: regular;
    font-size: 39px;
}
`

const Heading=styled.div `
padding-top:55px;
padding-left: 82px; 
margin-bottom: 38px;
h {
font-family: Lato,
font-weight: 400,
}
`

const Container=styled.div `
padding-left:64px;
padding-right:62px;
`

const UserImg= styled.div `
display: flex;
align-items: center;
img {
width:34.61px;
height:34.61px;
border-radius: 50%;
cursor: pointer;
display: flex;
margin-right:23px;
}
span {
  color:'#414141',
fontSize:'14px',
text-align: center
}
`