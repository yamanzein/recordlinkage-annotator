import React, { useEffect, useState } from "react";
import "typeface-roboto";

import ButtonsClassifier from "./ButtonsClassifier.js";
import Record from "./Record.js";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export async function addFile(data) {
  const response = await fetch(`/server/saveFile`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function saveFile(data, name) {
  console.log(data, name);
  const response = await fetch(`/server/overRideFile`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ user: data, fileName: name }),
  });
  return await response.json();
}

export default function ReviewZone(props) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === "Annotated") {
      setAppData(annotatedData);
      props.stats(annotatedData);
    } else if(event.target.value ==="To Annotate"){
      setAppData(toAnnotateData);
      props.stats(toAnnotateData);
    } else{
      const mergedArray = [];

      annotatedData.pairs.forEach((elem) => {
        mergedArray.push(elem);
      });

      toAnnotateData.pairs.forEach((elem) => {
        mergedArray.push(elem);
      });
      setAppData({ pairs: mergedArray })
      props.stats({ pairs: mergedArray })
    }
  };

  // Declare a new state contant for the index
  const [pairIndex, setPairIndex] = useState(0);

  // Declare a new state contant for the index
  const [appData, setAppData] = useState(props.reviewData);


  const filterFunc = (data) => {
    const annotatedObject = {
      pairs: data.pairs.filter((item) => item.label_str),
    };
    const toAnnotateObject = {
      pairs: data.pairs.filter((item) => !item.label_str),
    };
    setAnnotatedData(annotatedObject);
    setToAnnotateData(toAnnotateObject);
  };

  useEffect(() => {
    filterFunc(props.reviewData);
  }, [props.reviewData]);

  const getStats = () => {
    var matchCount = 0;
    var distinctCount = 0;

    for (var rec in appData["pairs"]) {
      if (appData["pairs"][rec].label === 1) {
        matchCount = matchCount + 1;
      }
      if (appData["pairs"][rec].label === 0) {
        distinctCount = distinctCount + 1;
      }
    }

    return { matchCount: matchCount, distinctCount: distinctCount };
  };

  const [annotatedData, setAnnotatedData] = useState([]);
  const [toAnnotateData, setToAnnotateData] = useState([]);

  const merger = (obj1, obj2) => {
    const mergedArray = [];

    obj1.pairs.forEach((elem) => {
      mergedArray.push(elem);
    });

    obj2.pairs.forEach((elem) => {
      mergedArray.push(elem);
    });
    filterFunc({ pairs: mergedArray });
    saveFile({ pairs: mergedArray }, props.fileName).then((response) => {
      console.log(response);
    });
  };
  const onClick = () => {
    merger(annotatedData, toAnnotateData);

    if (pairIndex < appData["pairs"].length - 1) {
      setPairIndex(pairIndex + 1);
    } else {
      console.log("Last record, we are done.");
      console.log(getStats());
      props.reviewState("export");
    }
  };

  const onExportClick = () => {
    console.log(getStats());
    props.reviewState("export");
  };

  const isMatch = () => {
    console.log("Records match");
    appData["pairs"][pairIndex].label = 1;
    appData["pairs"][pairIndex].label_str = "Match";
    console.log(appData["pairs"][pairIndex]);
    props.stats(appData);
    onClick();
  };

  const isDistinct = () => {
    console.log("Records are distinct");
    appData["pairs"][pairIndex].label = 0;
    appData["pairs"][pairIndex].label_str = "Distinct";
    props.stats(appData);
    onClick();
  };

  const saveRecordText = (text) => {
    appData["pairs"][pairIndex].text_area = text;
  };

  const forword = () => {
    if (pairIndex < appData["pairs"].length - 1) {
      setPairIndex(pairIndex + 1);
    }
  };

  const backword = () => {
    if (pairIndex !== 0) {
      setPairIndex(pairIndex - 1);
    }
  };

  document.onkeydown = checkKey;

  function checkKey(e) {

      e = e || window.event;

      
      if (e.keyCode == '37') {
        // left arrow
        backword()
      }
      else if (e.keyCode == '39') {
        // right arrow
        forword()
      }

  }
  

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl} >
        
        <InputLabel id="demo-simple-select-label">Choose Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="Annotated">Annotated</MenuItem>
          <MenuItem value="To Annotate">To Annotate</MenuItem>
          <MenuItem value="All Data">All Data</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={1}>
          <IconButton onClick={backword}>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11} sm={5}>
          <Record
            recordData={appData["pairs"][pairIndex]}
            recordSource="a"
            recoredStatus={appData["pairs"][pairIndex].label_str}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <Record
            recordData={appData["pairs"][pairIndex]}
            recordSource="b"
            recoredStatus={appData["pairs"][pairIndex].label_str}
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <IconButton onClick={forword}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
        {/* grid item for buttons at the bottom (or top))*/}
        <Grid item xs={12} sm={12}>
          <ButtonsClassifier
            isMatch={isMatch}
            isDistinct={isDistinct}
            onExportClick={onExportClick}
            index={pairIndex}
            recoredStatus={appData["pairs"][pairIndex].label_str}
            recordText={saveRecordText}
            textAreaValue={appData["pairs"][pairIndex].text_area}
          />
        </Grid>
      </Grid>
    </div>
  );
}
