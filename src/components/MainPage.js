import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Header from "./Header.js";

const useStyles = theme=>({
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
profit: {
  color: '#00CA39',
  border:'0',
},

loss: {
  color:'#E44067',
  border:'0',
},

data: {
height:'65px',
"&:nth-child(odd)": {
    backgroundColor:'rgba(238, 242, 245, 0.4)',
    border:'0',
},
}
});
class Hello extends Component {


  state = {
    users: null,
    total: null,
    per_page: null,
    current_page: 0,
  }


  componentWillMount() {
    this.makeHttpRequestWithPage(1);
    this.render();
  }


  makeHttpRequestWithPage = async pageNumber => {
    console.log(this.state.current_page+" "+pageNumber);
    if(this.state.current_page===pageNumber)
    return;
    const response=await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
    const data = await response.json();
    this.setState({
      users: data.data,
      total: data.total_pages,
      per_page: data.per_page,
      current_page: data.page,
    });
  }

  render() {
    const { classes } = this.props;    
    const {users}=this.state;
    const {current_page}=this.state;
    const {total}=this.state;
    return (
    <MainPart>
      <Header />
      <Container>
      <Table>
      <colgroup>
        <col style={{width:'20%'}}/>
        <col style={{width:'20%'}}/>
        <col style={{width:'20%'}}/>
        <col style={{width:'20%'}}/>
        <col style={{width:'20%'}}/>
      </colgroup>
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Owner</TableCell>
            <TableCell className={classes.head}>End date</TableCell>
            <TableCell className={classes.head}>Profits</TableCell>
            <TableCell className={classes.head}>Losses</TableCell>
            <TableCell className={classes.head}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users!=null? users.map((row) => (
            <TableRow className={classes.data} key={row.id}>
              <TableCell className={classes.entry}component="th" scope="row">
                <UserImg>
                  <img src={row.avatar}></img>
                <span>{row.first_name} {row.last_name}</span>
                </UserImg>
              </TableCell>
              <TableCell className={classes.entry}>12/3/12</TableCell>
              <TableCell className={classes.entry,classes.profit}>${Math.random().toFixed(2)}</TableCell>
              <TableCell className={classes.entry,classes.loss}>${Math.random().toFixed(2)}</TableCell>
              <TableCell className={classes.entry}>{row.email}</TableCell>
            </TableRow>
          )):""}
        </TableBody>
      </Table>
      <Footer>
        <img src='/images/back.svg'onClick={() => this.makeHttpRequestWithPage(current_page-1<=0 ?current_page: current_page-1)}></img>
        <span>{current_page}</span> of<span>{total}</span>
        <img src='/images/next.svg' onClick={() => this.makeHttpRequestWithPage(current_page+1>total ? current_page: current_page+1)}></img>
      </Footer>
      </Container>
        </MainPart> 
    );
  }

}

export default withStyles(useStyles,{withTheme:true})(Hello);

const MainPart=styled.div `
flex-grow:1;
align-content: center;
h {
    font-weight: regular;
    font-size: 39px;
}
`

const Container=styled.div `
padding-left:64px;
padding-right:62px;
display: flex;
flex-direction: column;
align-items: center;
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

const Footer=styled.div `
margin-top: 20px;
display: flex;
align-items: center;
span {
display: flex;
width: 35.5px;
margin-left:15px;
margin-right: 19px;
font-size:14px;
height: 35.5px;
background: #EEF2F5;
border-radius: 5px;
color:#414141;
align-items: center;
justify-content: center;
}
`