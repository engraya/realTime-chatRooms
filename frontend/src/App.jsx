import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import MainComponent from "./MainComponent"
import Body from "./Body" 

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Body onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;