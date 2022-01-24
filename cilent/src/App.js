import { Card, Grid, Input, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { sentiText, getTranslation } from "./actions/actions";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Sound from "./components/Sound";
import Header from "./components/Header";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"; //Happy
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied"; //neutral
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"; // Sad
import { green, red,yellow } from "@mui/material/colors";
import Keyboarddemo from "./components/keyboard/EnKeyboard";
import Button from "@mui/material/Button";
import Report from "./components/Report";
// import KeyboardIcon from '@mui/icons-material/Keyboard';
// import layout from "simple-keyboard-layouts/build/layouts/hindi";
import Keyboard from 'simple-keyboard';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "80%",
  width: "80%",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  // margin: "0 auto",
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    height: "95%",
    width: "95%",
  },
  [theme.breakpoints.down("md")]: {
    height: "95%",
    width: "95%",
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  leftMargin: {
    marginLeft: "auto",
    
  },
  marginZero: {
    margin: 0,
  },
  bg: {
    backgroundColor: theme.palette.primary.lighter,
  },
  inputFont: {
    fontSize: "1.5rem",
  }
}));
function copyText(entryText) {
  navigator.clipboard.writeText(entryText);
}
function App() {
  const [outputText, setoutputText] = useState('');
  const [inputText, setinputText] = useState('')
  
  const classes = useStyles();
  const [sentiment, setsentiment] = useState(
    <SentimentSatisfiedAltIcon sx={{ color: green[500] }} fontSize="large" />
  );
  const keyboard = useRef();
  const checkSentiment = async(e) => {
    const senti = await sentiText(e.target.value);
    if (senti==='pos') {
      setsentiment(
        <SentimentSatisfiedAltIcon
          sx={{ color: green[500] }}
          fontSize="large"
        />
      );
    } else if (senti === "neg") {
      setsentiment(
        <SentimentVeryDissatisfiedIcon
          sx={{ color: red[500] }}
          fontSize="large"
        />
      );
    } else {
      setsentiment(
        <SentimentSatisfiedIcon sx={{ color: yellow[500] }} fontSize="large" />
      );
    }
  }
  return (
    <div>
      <Header />

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid className={classes.marginZero} item xs={12} md={6} sm={12}>
          <Item className={classes.leftMargin}>
            <TextField
              inputProps={{
                style: {
                  fontSize: "1.5rem",
                },
              }}
              value={inputText}
              fullWidth
              autoFocus
              multiline
              minRows={9}
              placeholder="Hinglish Text"
              onChange={async (e) => {
                setinputText(e.target.value);
                // const translated = await getTranslation(e.target.value);
                // setoutputText(translated);
                keyboard.current.setInput(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{
                      position: "absolute",
                      bottom: "25px",
                      margin: "5px",
                    }}
                    position="start"
                  >
                    {/* <IconButton
                      sx={{
                        margin: "5px",
                      }}
                      aria-label="toggle password visibility"
                      onClick={() => console.log("Keyboard")}
                      edge="start"
                    >
                      <KeyboardIcon />
                    </IconButton> */}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    sx={{
                      position: "absolute",
                      bottom: "25px",
                      margin: "5px",
                      right: 0,
                    }}
                    position="end"
                  >
                    <IconButton
                      sx={{
                        margin: "5px",
                      }}
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      {/* <SentimentSatisfiedAltIcon
                        sx={{ color: green[500] }}
                        fontSize="large"
                      /> */}
                      {/* {sentiment} */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Item>
        </Grid>
        <Grid className={classes.marginZero} item xs={12} md={6} sm={12}>
          <Item className={classes.marginZero}>
            <TextField
              fullWidth
              inputProps={{
                style: {
                  fontSize: "1.5rem",
                },
              }}
              multiline
              onChange={(e) => {
                setoutputText(e.target.value);
                checkSentiment(e);
              }}
              value={outputText}
              minRows={9}
              placeholder="English Text"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{
                      position: "absolute",
                      bottom: "25px",
                      margin: "5px",
                    }}
                    position="start"
                  >
                    <IconButton
                      sx={{
                        margin: "5px",
                      }}
                      aria-label="toggle password visibility"
                      onClick={() => copyText(outputText)}
                      edge="start"
                    >
                      <ContentCopyIcon />
                    </IconButton>
                    <Sound inputText={outputText} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    sx={{
                      position: "absolute",
                      bottom: "25px",
                      margin: "5px",
                      right: 0,
                    }}
                    position="end"
                  >
                    <IconButton
                      sx={{
                        margin: "5px",
                      }}
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      {/* <SentimentSatisfiedAltIcon
                        sx={{ color: green[500] }}
                        fontSize="large"
                      /> */}
                      {sentiment}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Item>
        </Grid>
      </Grid>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Button
          sx={{
            margin: "15px",
          }}
          color="primary"
          variant="outlined"
          onClick={async () => {
            const translated = await getTranslation(inputText);
            setoutputText(translated);
          }}
        >
          {" "}
          Translate{" "}
        </Button>
        {/* <Button sx={{
          margin: "15px",

        }} sx={{
          color:red[500]
        }} variant='outlined'
        > Report Issues</Button> */}
        <Report inputText={inputText} outputText={outputText} />
      </div>
      <Keyboarddemo
        keyboard={keyboard}
        input={inputText}
        setInput={setinputText}
      />
    </div>
  );
}

export default App;
