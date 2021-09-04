import React from "react";
import {
  ListItem,
  List,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";
function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>

        <ListItemText primary={props.text} secondary="Dummy Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
