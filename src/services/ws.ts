interface Transaction {
  hash: string;
  size: number;
  time: Date;
  spent: number;
}

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
  const socket: WebSocket = new WebSocket('ws://35.230.75.178/moneditas/ws/', ["wamp"]);
  const service: any = {};
  const listeners: Listener[] = []

  // TODO: Add a remove listener function

  service.onMessage = function (listener: Listener) {
    console.log('Add event listener')
    listeners.push(listener)
  }

  service.close = function () {
    socket.close()
  }

  socket.addEventListener('open', function (event) {
    // Keep connection alive
    setInterval(() => socket.send('Ping'), 1000 * 1)
  });

  socket.addEventListener('message', function (event: any) {
    try {

      console.log(event.data)

      if (event.data === 'Ping') {
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



