import React, { useState, useEffect } from "react";
import "typeface-roboto";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Counter from "./Counter";
import ReviewDropzone from "./Dropzone.js";
import ReviewZone from "./Reviewzone.js";
import ButtonAppBar from "./AppBar.js";
import ExportData from "./ExportData.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Progress from "./ProgressBar";
import axios from "axios";
import Statestics from "./Statestics";
import FileList from "./files";
import {
  Checkbox,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import Card from "@material-ui/core/Card";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    olor: theme.palette.text.secondary,
  },
  title: {
    fontSize: 8,
  },
}));

// favicon: https://favicon.io/favicon-generator/?t=RL&ff=Kreon&fs=80&fc=%23FFFFFF&b=rounded&bc=%2337474f

export default function App() {
  // Declare a new state variable for stopping
  const [isState, setIsState] = useState("upload");

  // Declare a new state contant for the index
  const [appData, setData] = useState(undefined);

  const [NoOfPairs, setNoOfPairs] = useState();

  const [annotatedItem, setAnnotatedItem] = useState();

  const [toBeannotated, setToBeAnnotated] = useState();

  const [matchAnnotated, setMatchAnnotated] = useState();

  const [distinctAnnotated, setDistinctAnnotated] = useState();

  const [files, setfiles] = useState();

  const [visible, setVisible] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    getAllFiles();
  }, []);
  

  const getAllFiles = () => {
    axios
      .get("/server/getAllFiles")
      .then((response) => {
        setfiles(response.data);
      })
      .catch((err) => console.log(err));
  };

  // Setting the statistikcs 
  const getStat = (data) => {
    setAnnotatedItem(Counter(data.pairs).labledItem);
    setNoOfPairs(data.pairs.length);
    setToBeAnnotated(data.pairs.length - Counter(data.pairs).labledItem);
    setMatchAnnotated(Counter(data.pairs).match);
    setDistinctAnnotated(Counter(data.pairs).distinct);
  };

  const reviewData = (data) => {
    setData(data);
    goTo();
  };

  const reviewState = (state) => {
    setIsState(state);
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useState({
    palette: {
      primary: blueGrey,
      type: prefersDarkMode ? "light" : "dark", // strange. prefersDarkmode returns first the opposite
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        primary: blueGrey,
        type: newPaletteType,
      }
    });
  };

  

  const [fileName, setFileName] = useState();
  const goTo = (chosenData, name) => {
    setData(chosenData);
    setIsState("review");
    getStat(chosenData);
    setFileName(name);
  };

  const showBar=()=>{
    setVisible(!visible)
  }

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={muiTheme}>
        <ButtonAppBar reviewState={isState} onToggleDark={toggleDarkTheme} />
        <CssBaseline />
        
        <div style={{paddingTop:"5px"}}>
        <Fab color="primary" aria-label="add" variant="extended" onClick={(e, data) => showBar()} >
        <AddIcon onClick={(e, data) => showBar()} />
        Show Files
      </Fab></div>


        <Sidebar.Pushable >
          <Sidebar
            as={Segment}
            animation="scale down"
            icon="labeled"
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="very wide"
          >
            {files && (
              <FileList
                files={files}
                getAllFiles={getAllFiles}
                goToFile={goTo}
              ></FileList>
            )}
          </Sidebar>
          <Sidebar.Pusher >
            <div style={{width: "80%",margin: "auto",  padding: "10px"}}>
              <Typography component="div" style={{ paddingTop: "50px" }}>
                {isState === "review" && (
                  <Card id="allStats" className={classes.paper} >
                    <Progress size={NoOfPairs} labled={annotatedItem}></Progress>
                    <Statestics
                      size={NoOfPairs}
                      annotated={annotatedItem}
                      toAnnotate={toBeannotated}
                      match={matchAnnotated}
                      distinct={distinctAnnotated}
                    ></Statestics>
                  </Card>
                  )
                }
             
              
                {isState === "upload" && (
                  <React.Fragment>
                    
                    <Typography
                      component="h2"
                      variant="h3"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      Record pair labeling for record linkage and data matching
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      Turn your record pairs into golden record pairs with this
                      intuitive labeling tool. Labeled record pairs are
                      important for training and validation record linkage and
                      data matching processes.{" "}
                      <Link
                        href="https://github.com/J535D165/recordlinkage-annotator#create-annotation-file"
                        target="_blank"
                      >
                        Create an annotation file
                      </Link>{" "}
                      and start labeling your data!
                    </Typography>
                    <ReviewDropzone
                      reviewData={reviewData}
                      reviewState={reviewState}
                      getAllFiles={getAllFiles}
                    />
                    
                  </React.Fragment>
                )}

                {isState === "review" && (
                  <ReviewZone
                    reviewState={reviewState}
                    reviewData={appData}
                    stats={getStat}
                    fileName={fileName}
                  />
                )}

                {isState === "export" && (
                  <React.Fragment>
                    <Typography
                      component="h2"
                      variant="h3"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      Done!
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      You finished the annotation. You can now export the data
                      and save it for further analysis.
                    </Typography>

                    <ExportData reviewData={appData} />
                  </React.Fragment>
                )}
              </Typography>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </ThemeProvider>
    </React.Fragment>
  );
}
