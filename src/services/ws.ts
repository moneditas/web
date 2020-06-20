import ReconnectingWebSocket from 'reconnecting-websocket'

interface Transaction {
  hash: string;
  size: number;
  time: Date;
  spent: number;
}

const toMs = (seconds: number): number => seconds * 1000;
type Listener = ((transaction: Transaction) => void);

function parseTransaction(data: any): Transaction {
    const content = data.x
    const spent = content
      .out
      .reduce((total: number, { value }: { value: number }) => total + value, 0);

    const transaction : Transaction = {
      hash: content.hash,
      size: content.size,
      time: new Date(content.time),
      spent
    }

    return transaction;
}

function createWebSocketClient (): any {
  const socket = new ReconnectingWebSocket('wss://muzen.network/moneditas/ws/')
  const service: any = {};
  const listeners: Listener[] = []

  service.onMessage = function (listener: Listener) {
    listeners.push(listener)
  }

  service.close = function () {
    socket.close()
  }

  socket.addEventListener('open', function (event) {
    // Server expects a ping every x seconds to keep connection alive
    setInterval(() => socket.send('ping'), toMs(2))
  });

  socket.addEventListener('message', function (event: any) {
    try {
      if (event.data === 'ping' || event.data === 'pong') {
        return
      }

      const data = JSON.parse(event.data)
      const transaction: Transaction = parseTransaction(data);

      listeners.forEach(listener => listener(transaction));
    } catch (err) {
      // TODO: Handle errors
      console.error(err)
    }
  });

  return service;
}

export default createWebSocketClient



