import { Tool } from "@/components/Canvas";
import { getExistingShapes } from "./action";

type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    }
  | {
      type: "pencil";
      enterX: number;
      centerY: number;
      endX: number;
      endY: number;
    };

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private existingShapes: Shape[];
  private socket: WebSocket;
  private roomId: string;
  private clicked: boolean;
  private startX: number;
  private startY: number
  private selectedTool:Tool = "circle"

  constructor(canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.existingShapes = [];
    this.roomId = roomId;
    this.socket = socket;
    this.clicked = false
    this.startX = 0
    this.startY = 0
    this.init();
    this.inithandlers();
    this.initMouseHandlers();
  }

  setTool(tool: "circle" | "pencil" | "rect"){
    this.selectedTool = tool
  }

  async init() {
    this.existingShapes = await getExistingShapes(this.roomId);
    this.clearCanvas()
  }

  inithandlers() {
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type == "chat") {
        const parsedShape = JSON.parse(message.message);
        this.existingShapes.push(parsedShape.shape);
        this.clearCanvas();
      }
    };
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(0,0,0)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.existingShapes.map((shape) => {
      if (shape.type == "rect") {
        this.ctx.strokeStyle = "rgba(255,255,255)";
        this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      } else if (shape.type == "circle") {
        this.ctx.beginPath();
        this.ctx.arc(
          shape.centerX,
          shape.centerY,
          shape.radius,
          0,
          Math.PI * 2
        );
        this.ctx.stroke();
        this.ctx.closePath();
      }
    });
  }

  initMouseHandlers(){
    this.canvas.addEventListener("mousedown", (e) => {
    this.clicked = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
  });

   this.canvas.addEventListener("mouseup", (e) => {
    this.clicked = false;
    const width = e.clientX - this.startX;
    const height = e.clientY - this.startY;
    // @ts-ignore
    const selectedTool = this.selectedTool;
 let shape: Shape | null = null
    if (selectedTool == "rect") {
       shape = {
        //@ts-ignore
        type: "rect",
        x: this.startX,
        y: this.startY,
        height,
        width,
      };
    
    }else if(selectedTool == "circle"){
        const radius = Math.max(width, height)
        shape = {
        //@ts-ignore
        type: "circle",
        radius: radius,
        centerX: this.startX + radius,
        centerY: this.startY + radius,
      };
    }
    if(!shape) return 

    this.existingShapes.push(shape);

    this.socket.send(
      JSON.stringify({
        type: "chat",
        message: JSON.stringify({
          shape,
        }),
        roomId: this.roomId
      })
    );
  });

  this.canvas.addEventListener("mousemove", (e) => {
      if (this.clicked) {
        const selectedTool = this.selectedTool;
      const width = e.clientX - this.startX;
      const height = e.clientY - this.startY;

      this.clearCanvas();
      this.ctx.strokeStyle = "rgba(255,255,255)";
      if (selectedTool == "rect") {
        this.ctx.strokeRect(this.startX, this.startY, width, height);
      } else if (selectedTool == "circle") {
        const centerX = this.startX + width / 2;
        const centerY = this.startX + height / 2;
        const radius = Math.max(width, height);
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();
      }
    }
  });
  }
}
