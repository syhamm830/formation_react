import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/formulaire">Contact</Link></li>
        <li><Link to="/todolist">Todolist</Link></li>
      </ul>
    </nav>
  )
}
