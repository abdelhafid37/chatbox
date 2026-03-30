import { useState } from "react";
import UsernameEntry from "./components/UsernameEntry";

function App() {
  const [username, setUsername] = useState(null);

  return username === null ? (
    <UsernameEntry setUsername={setUsername} />
  ) : (
    <div>chat</div>
  );
}

export default App;
