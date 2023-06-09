import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const buttonStyle = {
    color:"#41295a",
    fontFamily: "'Zeyada', cursive",
    fontSize:"20px",
    fontWeight:"bold",
    border: "2px solid #41295a"
  }
  const contactBoxStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign: "center",
    marginTop:"5rem"
  }
export default function Contact() {
  return (
    <>
      <Box sx ={contactBoxStyle}>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" sx={{fontFamily:"'Zeyada', cursive",fontWeight:"bolder",color:"#41295a"}}>Contact</Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField label="Name" sx={{ width: '30%', fontSize: '1.2rem' }} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField label="Email" sx={{ width: '30%', fontSize: '1.2rem' }} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Message"
          multiline
          rows={4}
          sx={{ width: '30%', fontSize: '1.2rem' }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
       <Button variant="outlined" sx={buttonStyle} >Send Message</Button>
       </Box>
       </Box>
    </>
  );
}