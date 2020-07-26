import { useState } from 'react'
import { useEffect } from 'react'
import ReconnectingWebSocket from 'reconnecting-websocket'

export type Transaction = {
  hash: string
  size: number
  time: Date
  spent: number
}

function parseTransaction(data: any): Transaction {
  const content = data.x
  const spent = content.out.reduce(
    (total: number, { value }: { value: number }) => total + value,
    0
  )

  const transaction: Transaction = {
    hash: content.hash,
    size: content.size,
    time: new Date(content.time),
    spent,
  }

  return transaction
}

export function useWebSocket(): [Transaction[], ReconnectingWebSocket] {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [socket] = useState(() => new ReconnectingWebSocket('ws://moneditas.herokuapp.com/ws/'))

  useEffect(() => {
    socket.addEventListener('open', function (event) {
      // Server expects a ping every x seconds to keep connection alive
      setInterval(() => socket.send('ping'), 2000)
    })

    socket.addEventListener('message', function (event: any) {
      try {
        if (event.data === 'ping' || event.data === 'pong') {
          return
        }

        const data = JSON.parse(event.data)
        const transaction: Transaction = parseTransaction(data)

        setTransactions((transactions) => [transaction, ...transactions])
      } catch (err) {
        console.error(err)
      }
    })
  }, [socket])

  return [transactions, socket]
}
