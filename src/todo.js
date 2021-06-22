import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";
import "./todo.css";

export default function TodoListItem({ todo, inprogress, id }) {
    function toggleInProgress() {
        db.collection("todos").doc(id).update({
        inprogress: !inprogress,
        });
    }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div class="listitem" style={{ display: "flex" }}>
    <Button onClick={toggleInProgress}>
        {inprogress ? "V" : " "}
    </Button>

    <ListItem>
        <ListItemText
        primary={todo}
        />
    </ListItem>

    <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}