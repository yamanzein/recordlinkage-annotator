import React from "react";
import {  Statistic } from "semantic-ui-react";

const StatisticExampleInverted = (props) => (
 
  <Statistic.Group widths="5" size="mini">
    <Statistic color="grey" size="mini" >
      <Statistic.Value>{props.size}</Statistic.Value>
      <Statistic.Label>Total Number of Records</Statistic.Label>
    </Statistic>
    <Statistic color="grey" size="mini">
      <Statistic.Value>{props.annotated}</Statistic.Value>
      <Statistic.Label>Annotated</Statistic.Label>
    </Statistic>
    <Statistic color="grey" size="mini">
      <Statistic.Value>{props.toAnnotate}</Statistic.Value>
      <Statistic.Label>To Annotate</Statistic.Label>
    </Statistic>
    <Statistic color="green" size="mini">
      <Statistic.Value>{props.match}</Statistic.Value>
      <Statistic.Label>Match Pairs</Statistic.Label>
    </Statistic>
    <Statistic color="red" size="mini">
      <Statistic.Value>{props.distinct}</Statistic.Value>
      <Statistic.Label>No-Match Pairs</Statistic.Label>
    </Statistic>
  </Statistic.Group>
);

export default StatisticExampleInverted;
