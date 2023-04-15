import './App.css';
import {Feed} from "./Feed.jsx";
import {getUserById} from "./UserService.js";
import ResponsiveAppBar from "./ResponsiveAppBar.jsx";
import React from "react";

export default function App() {
  const currentUserId = 1;
  const currentUser = getUserById(currentUserId);

  return (
    <>
      <header>Orkut</header>
      <ResponsiveAppBar/>
      <Feed currentUser={currentUser}/>
    </>
  );
}
