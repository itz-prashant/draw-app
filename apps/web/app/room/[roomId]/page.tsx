import axios from "axios";
import { BaCKEND_URL } from "../../config";
import ChatRoom from "../../components/ChatRoom";

async function getRoomId(slug:string){
    const response = await axios.get(`${BaCKEND_URL}/room/${slug}`)
    return response.data.room.id
}

export default async function ChatRoom1({
params
}:{
    params:{
        slug: string
    }
}){
    console.log("params", await params)
    const slug =  (await params).roomId;
    const roomId = await getRoomId(slug)

    return <ChatRoom id={roomId}/>
}