"use client"

import { initDraw } from '@/draw'
import React, { useEffect, useRef } from 'react'

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(()=>{

        if(canvasRef.current){
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d")
           
            initDraw(ctx, canvas)
        }

    },[canvasRef])

  return (
    <div>
      <canvas ref={canvasRef} width={1400} height={1000} />
    </div>
  )
}

export default Canvas
