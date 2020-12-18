import React from "react";
import { Progress } from "semantic-ui-react";

export default function Record(props) {
  return (
    <div
      style={{
        width: "95%",
        paddingLeft: "5%",
        paddingTop: "1%",
        paddingBottom: "2%"
      }}
    >
      <Progress
        value={props.labled}
        total={props.size}
        progress="percent"
        label="Has been annotated"
        active
        size="big"
        color="teal"
        indicating
        autoSuccess
        precision={0}
      />
    </div>
  );
}
