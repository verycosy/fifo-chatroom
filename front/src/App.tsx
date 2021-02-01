import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000', { transports: ['websocket'] });

function App() {
  return <div>FIFO CHAT ROOM</div>;
}

export default App;
