"use client"

import { WS_URL } from '@/config'
import { useEffect, useState } from 'react'
import { Canvas } from './Canvas'


export default function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null)

  useEffect(()=>{
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmY2NDg5Zi0wZWVhLTQ2ZWUtOTkyZC04NzJhOTM2YjU4NWYiLCJpYXQiOjE3NTU2MDg0MDF9.WWDPfeUyVVrPzLTXqs1Mu5i5tNRlI36SFYMV4sHRuNg`)

    ws.onopen = ()=>{
        setSocket(ws)
        ws.send(JSON.stringify({
          type: "join_room",
          roomId
        }))
    }
  },[])

  if(!socket){
    return(
        <div>
            Connection to server....
        </div>
    )
  }

  return (
    <div>
      <Canvas roomId={roomId} socket={socket}/>
    </div>
  )
}
