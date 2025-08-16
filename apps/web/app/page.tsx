"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw"
    }}>
      <div>
        <input
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          placeholder="Room Id"
        />
        <button
          onClick={() => {
            router.push(`/room/${roomId}`);
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
