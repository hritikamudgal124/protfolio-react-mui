import React from "react";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";


const headingText = {
  marginTop: "1rem",
  marginLeft: "1rem",
  color: "#20002c",
  fontFamily: "'Zeyada', cursive",
  fontWeight: "bold",
};

const mainText = {
  marginTop: "0.5rem",
  marginLeft: "1rem",
  display: "flex",
  textAlign: "left",
  fontSize: "20px",
};

const timelineContent = {
  color: "389253e",
  fontSize: "25px",
};

const skillsData = [
  { 
    title: "HTML", 
    icon: <HtmlIcon /> 
  },
  { 
    title: "CSS",
    icon: <CssIcon /> 
  },
  { 
    title: "BOOTSTRAP",
    icon: <CssIcon /> 
  },
  { 
    title: "MATERIAL UI",
    icon: <CssIcon />
  },
  { 
    title: "JAVASCRIPT",
    icon: <JavascriptIcon />
  },
  { 
    title: "REACTJS",
    icon: <JavascriptIcon /> 
  },
];

const About = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ marginLeft: "10rem", marginTop: "2rem" }}>
        <Grid item xs={6} md={4}>
          <div style={{ marginTop: "5rem", marginLeft: "3rem" }}>
            <Avatar src="" alt="Profile Image" sx={{ width: 150, height: 150 }} />
          </div>
          <Typography variant="h3" sx={headingText}>
            Hritika Mudgal
          </Typography>
          <Typography variant="h6" sx={mainText}>
            Hello, I am Hritika, a passionate and dedicated ReactJS frontend developer.
            <br /> With a keen eye for design and a love for creating engaging user experiences,
            <br /> I specialize in crafting dynamic and intuitive web applications using ReactJS.
          </Typography>
        </Grid>

        <Box sx={{ marginTop: "5rem", marginLeft: "15rem" }}>
          <Grid item xs={6} md={8}>
            <Typography
              sx={{
                color: "#20002c",
                fontFamily: "'Zeyada', cursive",
                fontSize: "40px",
                fontWeight: "bolder",
              }}
            >
              MY SKILLS
            </Typography>
            <Timeline position="alternate">
              {skillsData.map((skill, index) => (
                <TimelineItem key={index}>
                  <TimelineContent sx={timelineContent} variant="h6" component="span">
                    {skill.title}
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      {skill.icon}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default About;
