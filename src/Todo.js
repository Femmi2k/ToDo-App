import React from "react";
import { ListItem, List, ListItemText, Button } from "@material-ui/core";
import "./Todo.css";

function Todo(props) {
  const { text, index, deleteHandler } = props;
  return (
    <List>
      <ListItem>
        <ListItemText primary={text} secondary="Dummy Deadline" />
      </ListItem>
      <Button
        variant="contained"
        color="default"
        onClick={() => deleteHandler(index)}
      >
        DELETE ENTRY
      </Button>
    </List>
  );
}

export default Todo;
