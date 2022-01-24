import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { green, red, yellow } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import {reportForm} from '../actions/actions';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const textInput = {
  width: "80%",
  margin: "10px 50px",
  
  
}

function Form({inputText,outputText}) {
 const [visblemessage, setvisblemessage] = React.useState(false);
  const [formData, setformData] = React.useState({
    inputText: inputText,
    outputText: outputText,
    comment: "",
  });
  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmit = (event) => {
    console.log(formData);
    reportForm(formData);
    setvisblemessage(true);
    
  }
  return (
    <div>
      <TextField
        value={formData.inputText}
        fullWidth
        sx={textInput}
        label="Input"
        variant="outlined"
        name="inputText"
        disabled
      />

      <TextField
        fullWidth
        value={formData.outputText}
        sx={textInput}
        label="Output"
        variant="outlined"
        name="output"
        disabled
      />
      <TextField
        fullWidth
        sx={textInput}
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        label="Any Additional Comments (Optional)"
        variant="outlined"
      />
      {visblemessage && (
        <Typography
          sx={{
            color: red[500],
          }}
          align="center"
        >
          Your response has been Submited
        </Typography>
      )}

      <Typography
        sx={{
          marginTop: "10px",
        }}
        align="center"
      >
        <Button
          onClick={handleSubmit}
          color="primary"
          size="large"
          type="submit"
          variant="contained"
        >
          Report Bug
        </Button>
      </Typography>
    </div>
  );
}

export default function Report({ inputText,outputText}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          color: red[500],
        }}
        onClick={handleOpen}
      >
        Report Issue
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <Typography align="center" alignContent="center" variant="h3">
            Report
          </Typography>

          <Form
            
            inputText={inputText}
            outputText={outputText}
          />
        </Box>
      </Modal>
    </div>
  );
}
