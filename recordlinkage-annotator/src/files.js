import Axios from "axios";
import React from "react";
import { Button, List } from "semantic-ui-react";

export async function deleteFile(name) {
  const response = await fetch(`/server/deleteFile`, {
    method: "DELETE",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ fileName: name }),
  });
  return await response.json();
}

export async function getFile(name) {
  const response = await Axios.get("/server/getFile/" + name);
  return await response;
}

export default function fileList(props) {
  const handleDelete = (element) => {
    console.log(element);
    deleteFile(element);
    props.getAllFiles();
  };

  const handleChoose = (element) => {
    console.log(element);
    getFile(element).then((response) => {
      console.log(response.data);
      props.goToFile(response.data, element);
    });
  };

  const exportUri = (element) => {
    getFile(element).then((response) => {
      console.log(response.data);
      var str = JSON.stringify(response.data, null, 2);
      const blob = new Blob([str], { type: "application/json" });
      var csvURL = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = csvURL;
      a.download = element;
      a.click();
    });
  };

  const body = props.files.map((element) => (
    <List.Item key={element}>
      <List.Content floated="right">
        <Button size="mini" color="blue" onClick={() => handleChoose(element)}>
          Choose
        </Button>
        <Button size="mini" color="orange" onClick={() => exportUri(element)}>
          Export
        </Button>
        <Button size="mini" color="red" onClick={() => handleDelete(element)}>
          Delete
        </Button>
      </List.Content>
      <List.Content floated="left">{element}</List.Content>
    </List.Item>
  ));
  return (
    <List
      as="Segment"
      relaxed
      celled
      animated
      size={"medium"}
      divided
      verticalAlign="middle"
    >
      {body}
    </List>
  );
}
