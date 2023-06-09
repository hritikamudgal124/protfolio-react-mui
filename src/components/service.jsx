import React from "react";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";

const cardStyle = {
  textAlign: "center",
  marginBottom: 2,
  fontFamily: "'Zeyada', cursive",
  fontWeight: "bold",
  color: "#2F0743",
};

const services = [
  {
    title: "Web Development",
    description:
      "Design and develop responsive websites using modern technologies.",
    image:
      "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?w=2000",
  },
  {
    title: "Graphic Design",
    description:
      "Create visually appealing graphics for digital and print media.",
    image:
      "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5411786fbba_ABM%20college%20graphic%20designer%20main.jpg",
  },
  {
    title: "Content Writing",
    description:
      "Produce engaging and informative content for websites and blogs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NIL57X7tOKDGYQnJiG4HZW6Gq2JHt2VKYA&usqp=CAU",
  },
];

const Services = () => {
  return (
    <Box sx={{ marginTop: "8rem" }}>
      <Typography variant="h3" component="h2" sx={cardStyle}>
        Services
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {services.map((service, index) => (
          <Card key={index} sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.title}
            />
            <CardContent>
              <Typography variant="h5" component="h3" sx={{ marginBottom: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
