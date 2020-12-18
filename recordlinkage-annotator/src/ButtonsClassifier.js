import React, { Fragment, useEffect, useState } from "react";
import "typeface-roboto";

import { makeStyles } from "@material-ui/core/styles";
import Buttons from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Button } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  center: {},
  buttonRight: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonsClassifier(props) {
  const classes = useStyles();
  const [match, setMatch] = useState();
  const [distinct, setDistinct] = useState();

  useEffect(() => {
    if (props.recoredStatus === "Match") {
      setMatch("green");
      setDistinct("grey");
    } else if (props.recoredStatus === "Distinct") {
      setMatch("grey");
      setDistinct("red");
    } else {
      setMatch("grey");
      setDistinct("grey");
    }
    if (props.textAreaValue) {
      setName(props.textAreaValue);
    } else {
      setName("");
    }
  }, [props.recoredStatus, props.textAreaValue, props.index]);

  const [name, setName] = React.useState("");
  const handletextChange = (event) => {
    setName(event.target.value);
    props.recordText(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button.Group>
            <Button color={match} active="false">
              Match
            </Button>
            <Button.Or />
            <Button color={distinct} active="false">
              No-Match
            </Button>
          </Button.Group>
        </div>
        <TextField
          id="filled-full-width"
          label="Give a comment"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={name}
          onChange={handletextChange}
        />
      </div>
      <div className={classes.center}>
        <Buttons
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.isMatch}
        >
          Match
        </Buttons>
        <Buttons
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={props.isDistinct}
        >
          No-Match
        </Buttons>
        <Buttons
          variant="outlined"
          color="default"
          className={classes.buttonRight}
          endIcon={<CloudDownloadIcon></CloudDownloadIcon>}
          onClick={props.onExportClick}
        >
          Export
        </Buttons>
        <Buttons variant="outlined" disabled>
          Index : {props.index}
        </Buttons>
      </div>
    </Fragment>
  );
}
