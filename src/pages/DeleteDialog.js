import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  openDialogue,
  setOpenDialogue,
  id,
}) {
  const history = useHistory();
  const deleteProduct = async () => {
    const response = await axios
      .delete(`https://odd-lime-anemone-kit.cyclic.app/posts/${id}`)
      .then((res) => {
        console.log(res);
      });
    // history.push("/");
  };
  return (
    <div>
      <Dialog
        open={openDialogue}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setOpenDialogue(false);
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ mt: 3 }}>
          Are you sure you want to delete the Product??
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteProduct}>Yes Delete</Button>
          <Button
            onClick={() => {
              setOpenDialogue(false);
            }}
          >
            cancle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
