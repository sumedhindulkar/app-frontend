import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "./DeleteDialog";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [openDialogue, setOpenDialogue] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://odd-lime-anemone-kit.cyclic.app/posts",
        { params: { id } }
      );
      setData(data[0]);
    };
    fetchData();
  }, []);

  // const deleteProduct = async () => {};
  return (
    <>
      <DeleteDialog
        openDialogue={openDialogue}
        setOpenDialogue={setOpenDialogue}
        id={id}
      />
      {data && (
        <Container
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={5}>
            <Grid item md={5}>
              <img
                src={data.image}
                style={{ width: "200px", maxHeight: "280px", padding: "30px" }}
              />
            </Grid>
            <Grid
              item
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="h4">{data.title}</Typography>
              <Typography variant="h6">{data.description}</Typography>
              <Box sx={{ my: 1 }}>
                {/* <StarBorderIcon /> */}
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Rating:
                  <Box
                    sx={{
                      ml: 2,
                      display: "flex",
                      alignItems: "center",
                      color: "#F19934",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => {
                      return Math.ceil(data.rating.rate) >= i ? (
                        <GradeIcon />
                      ) : (
                        <StarBorderIcon />
                      );
                    })}
                  </Box>
                </Typography>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DeleteIcon />}
                  color="error"
                  sx={{ ml: 3 }}
                  onClick={() => {
                    setOpenDialogue(true);
                  }}
                >
                  Delete Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default ProductDetails;
