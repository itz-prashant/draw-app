import axios from "axios"
import { BaCKEND_URL } from "../config"
import { ChatRoomClient } from "./ChatRoomClient"

async function getChats(roomId: string){
    const res = await axios.get(`${BaCKEND_URL}/chat/${roomId}`)
    return res.data.messages
}

export async  function ChatRoom ({id}:{
    id: string
}) {
    const messages = await getChats(id)

    return <ChatRoomClient id={id} messages={messages}/>
}

export default ChatRoom
