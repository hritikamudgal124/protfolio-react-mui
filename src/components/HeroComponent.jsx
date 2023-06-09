import { Box} from "@mui/material";
import { Button } from '@mui/material';
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


const boxStyle = {
  marginTop: "10rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  fontFamily: "'Zeyada', cursive",
  fontSize:"30px"
};
const buttonStyle = {
  color:"black",
  fontFamily: "'Zeyada', cursive",
  fontSize:"20px",
  marginLeft:"37rem",
  border:"2px solid black"
}
function HeroComponent() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    axios
      .request({
        url: "http://localhost:3030/hero",
        method: "GET",
      })
      .then((response) => {
        console.log(response);
        setHeroData(response.data);
      });
  }, []);

  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMe=()=>{
    navigate("/Contact")
  }
  return (
    <>
      <Box sx={boxStyle}>
        <Box >
          {heroData.map((hero) => {
            return (
              <>
                <h1>{hero.name}</h1>
                <span>{hero.title}</span>
              </>
            );
          })}
        </Box>
      </Box>
      <div>
       <Button variant="outlined" sx={buttonStyle} onClick={handleNavigateToContactMe}>Hire Me</Button>
       </div>
       </>
  );
}


export default HeroComponent;
