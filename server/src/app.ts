import { createServer, Server } from 'http';
import express from 'express';
import { Server as SocketIO, Socket } from 'socket.io';
import cors from 'cors';

class App {
  public app: express.Application;
  public port: number;
  public server: Server;
  public io: SocketIO;

  constructor(port = 5000) {
    this.port = port;

    this.app = express();
    this.app.use(
      cors({
        origin: 'http://localhost:3000',
      })
    );

    this.server = createServer(this.app);

    this.io = new SocketIO(this.server);
    this.io.on('connection', (socket: Socket) => {
      console.log('connected');
    });
  }

  run() {
    this.server.listen(this.port, () =>
      console.log(`Server running on localhost:${this.port}`)
    );
  }
}

new App().run();
