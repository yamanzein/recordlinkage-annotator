import React from "react";
import "typeface-roboto";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

export default function RecordItem(props) {
  
  return (
    <ListItem alignItems="flex-start" >
      <Typography   style={{ wordBreak: "break-word",display:"inline-block"}} component="p">{props.itemText}</Typography>
    </ListItem>
  );
}
