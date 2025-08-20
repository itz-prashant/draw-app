import { useEffect, useRef, useState } from "react"
import { initDraw } from '@/draw'
import IconButton from "./IconButton"
import { Circle, Pencil, RectangleHorizontal } from "lucide-react"
import { Game } from "@/draw/game"

export type Tool = "circle" | "rect" | "pencil"

export function Canvas ({roomId, socket}:{roomId: string, socket:WebSocket}) {
const canvasRef = useRef<HTMLCanvasElement>(null)
const [selectedTool, setSelectedTool] = useState<Tool>("circle")
const [game, setGame] = useState<Game>()

useEffect(()=>{
 game?.setTool(selectedTool)
},[selectedTool, game])

  useEffect(() => {
      if (canvasRef.current) {
        const g = new Game(canvasRef.current, roomId, socket)
        setGame(g)

        
      }
    }, [canvasRef])

     return (
    <div className="h-[100vh] overflow-hidden">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
    </div>
  )
}

function TopBar({selectedTool, setSelectedTool}:{
  selectedTool: Tool,
  setSelectedTool: (s: Tool)=> void
}){
  return(
    <div className="fixed top-10 left-10 text-white flex gap-4">
      <IconButton icon={<Pencil />} onClick={()=> {setSelectedTool("pencil")}} activated={selectedTool === "pencil"}/>
      <IconButton icon={<RectangleHorizontal />} onClick={()=> {setSelectedTool("rect")}} activated={selectedTool === "rect"}/>
      <IconButton icon={<Circle />} onClick={()=> {setSelectedTool("circle")}} activated={selectedTool === "circle"}/>
    </div>
  )
}
