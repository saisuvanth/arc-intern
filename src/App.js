import {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import styles from './styles.module.css';
import axios from 'axios';
import {Table,TableBody,TableContainer,TableCell,TableHead,TableRow,Paper} from '@mui/material'


const App=()=> {
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      const json=res.data;
      setData(json);
      console.log(json[0].name);
    })
  },[]);


  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh',color:'white'}}>
      <TableContainer component={Paper} className={styles.mytable}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h6>Name</h6></TableCell>
            <TableCell><h6>Username</h6></TableCell>
            <TableCell><h6>Email</h6></TableCell>
            <TableCell><h6>Phone</h6></TableCell>
            <TableCell><h6>Website</h6></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell >{row.username}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
