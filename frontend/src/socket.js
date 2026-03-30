import { io } from "socket.io-client";

const serverURL = import.meta.env.VITE_SOCKET_URL || "http://localhost:8000";
const socket = io(serverURL);

export default socket;
