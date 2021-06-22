import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./router.css"

export default function Router_h() {
  return (
    <div className="links">
      
      <div className="header">                                           
        <Link to="/">
          <Button className="word">首頁</Button>
        </Link>
        <Link to="/reciepe">
          <Button>食譜</Button>
        </Link>
        <Link to="/intro">
          <Button>介紹</Button>
        </Link>
        <Link to="/login">
          <Button>登入</Button>
        </Link>
        <Link to="/todolist">
          <Button>To Do List</Button>
        </Link>
      </div>
    </div>
  );
}