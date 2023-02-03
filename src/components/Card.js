import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Box } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function ActionAreaCard(item) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={item.item.image}
            style={{
              width: "250px",
              height: "250px",
              padding: "30px",
              objectFit: "contain",
            }}
          />
          <Typography gutterBottom variant="h6" sx={{ textAlign: "center" }}>
            {item.item.title.substr(0, 10)}..
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "center",
              my: 1,
              overflow: "hidden",
              height: "60px",
            }}
          >
            {item.item.description.substr(0, 80)}...
          </Typography>
          <Box sx={{ my: 1, color: "#F19934" }}>
            {/* <StarBorderIcon /> */}

            {[1, 2, 3, 4, 5].map((i) => {
              return Math.ceil(item.item.rating.rate) >= i ? (
                <GradeIcon />
              ) : (
                <StarBorderIcon />
              );
            })}
          </Box>
          <Typography gutterBottom variant="subtitle2">
            PRICE: ${item.item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
