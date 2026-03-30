import { useState } from "react";
import UsernameEntry from "./components/UsernameEntry";
import socket from "./socket";

function App() {
  const [username, setUsername] = useState(null);

  socket.on();

  return username === null ? (
    <UsernameEntry setUsername={setUsername} />
  ) : (
    <div>chat</div>
  );
}

export default App;
